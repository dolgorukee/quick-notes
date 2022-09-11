<template>
  <q-input
    v-model="content"
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

const content = ref(props.note ? props.note.content : '');

function save() {
  emit('save', {
    id: props.note ? props.note.id : new Date().toISOString(),
    content: content.value,
  });
}

function cancel() {
  emit('cancel');
}
</script>
