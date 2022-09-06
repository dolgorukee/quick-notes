<template>
  <q-input
    v-model="text"
    type="textarea"
    :label="$t('note')"
    class="full-width q-mt-md max-width"
  />
  <q-btn color="primary" class="full-width q-mt-md max-width" @click="save">{{
    $t('save')
  }}</q-btn>
  <q-btn
    color="negative"
    class="full-width q-mt-md max-width"
    @click="cancel"
    >{{ $t('cancel') }}</q-btn
  >
</template>

<script setup lang="ts">
import { Note } from 'src/components/models';
import { ref } from 'vue';

interface Props {
  note?: Note;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'save', payload: Note): void;
  (e: 'cancel'): void;
}>();

const text = ref(props.note ? props.note.text : '');

function save() {
  emit('save', {
    id: props.note ? props.note.id : new Date().toISOString(),
    text: text.value,
  });
}

function cancel() {
  emit('cancel');
}
</script>
