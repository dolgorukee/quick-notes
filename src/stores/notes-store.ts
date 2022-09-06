import { defineStore } from 'pinia';
import { Note } from 'src/components/models';

export interface NotesState {
  notes: Note[];
}

export const useNotesStore = defineStore('notes', {
  state: (): NotesState => ({
    notes: [],
  }),
  getters: {
    noteById(state) {
      return (id: string) => state.notes.find((note) => note.id == id);
    },
  },
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
    },

    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => note.id != id);
    },

    editNote(modifiedNote: Note) {
      const index = this.notes.findIndex((note) => note.id == modifiedNote.id);
      if (index != -1) {
        this.notes[index] = modifiedNote;
      }
    },
  },
});
