<template>
  <q-page class="column items-center">
    <q-list separator class="full-width max-width">
      <note-item v-for="note in notes" :key="note.id" :note="note" />
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import NoteItem from 'src/components/NoteItem.vue';
import { useNotesStore } from 'src/stores/notes-store';

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);

notesStore.getNotes();
</script>
