<template>
  <q-item>
    <q-item-section>{{ note.text }}</q-item-section>
    <q-item-section side>
      <q-btn icon="edit" @click="editNote"></q-btn>
      <q-btn
        icon="delete"
        color="negative"
        @click="showDeleteNoteConfirmationDialog"
        class="q-mt-md"
      ></q-btn>
    </q-item-section>
  </q-item>

  <q-dialog v-model="deleteNoteConfirmationDialog">
    <q-card>
      <q-card-section class="text-h6">{{ $t('areYouSure') }}</q-card-section>
      <q-card-actions>
        <q-btn
          :label="$t('no')"
          type="button"
          color="primary"
          @click="dismissDeleteNoteConfirmationDialog"
        />
        <q-btn
          :label="$t('yes')"
          type="submit"
          color="negative"
          @click="deleteNote"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Note } from 'src/components/models';
import { useNotesStore } from 'src/stores/notes-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  note: Note;
}

const props = defineProps<Props>();
const notesStore = useNotesStore();
const router = useRouter();
const deleteNoteConfirmationDialog = ref(false);

function showDeleteNoteConfirmationDialog() {
  deleteNoteConfirmationDialog.value = true;
}

function dismissDeleteNoteConfirmationDialog() {
  deleteNoteConfirmationDialog.value = false;
}

function deleteNote() {
  notesStore.deleteNote(props.note.id);
}

function editNote() {
  router.push({ name: 'EditNote', params: { id: props.note.id } });
}
</script>
