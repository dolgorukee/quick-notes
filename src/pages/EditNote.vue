<template>
  <q-page class="column items-center">
    <note-form @save="save" @cancel="cancel" :note="existingNote" />
  </q-page>
</template>

<script setup lang="ts">
import { Note } from 'src/components/models';
import NoteForm from 'src/components/NoteForm.vue';
import { useNotesStore } from 'src/stores/notes-store';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const notesStore = useNotesStore();
const route = useRoute();

const existingNote = notesStore.noteById(route.params.id as string);

function save(note: Note) {
  existingNote
    ? notesStore.editNote(
        note,
        () => {
          router.push({ name: 'Index' });
        },
        (error: Error) => {
          console.error(error);
        }
      )
    : notesStore.addNote(
        note,
        () => {
          router.push({ name: 'Index' });
        },
        (error: Error) => {
          console.error(error);
        }
      );
}

function cancel() {
  router.push({ name: 'Index' });
}
</script>
