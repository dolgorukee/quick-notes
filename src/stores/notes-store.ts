import {
  provideApolloClient,
  useMutation,
  useQuery,
} from '@vue/apollo-composable';
import { defineStore } from 'pinia';
import { apolloClient } from 'src/apollo/clients';
import { Note } from 'src/components/models';
import {
  CreateNoteDocument,
  DeleteNoteDocument,
  GetNotesDocument,
  GetNotesQuery,
  UpdateNoteDocument,
} from 'src/graphql/generated';

provideApolloClient(apolloClient);

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
    getNotes() {
      const { onResult, onError, result } = useQuery(GetNotesDocument);
      if (result.value) {
        this.processGetNotesResult(result.value);
      }
      onResult((result) => {
        this.processGetNotesResult(result.data);
      });
      onError((error) => {
        console.error(error);
      });
    },

    addNote(
      note: Note,
      onDoneFunction: () => void,
      onErrorFunction: (error: Error) => void
    ) {
      const {
        mutate: addNote,
        onDone,
        onError,
      } = useMutation(CreateNoteDocument);
      onDone(() => {
        onDoneFunction();
      });
      onError((error) => {
        onErrorFunction(error);
      });
      addNote(
        {
          input: {
            fields: {
              content: note.content,
            },
          },
        },
        {
          refetchQueries: [
            {
              query: GetNotesDocument,
            },
          ],
        }
      );
    },

    deleteNote(id: string) {
      const { mutate: deleteNote, onError } = useMutation(DeleteNoteDocument);
      onError((error) => {
        console.error(error);
      });
      deleteNote(
        {
          input: {
            id: id,
          },
        },
        {
          refetchQueries: [
            {
              query: GetNotesDocument,
            },
          ],
        }
      );
    },

    editNote(
      modifiedNote: Note,
      onDoneFunction: () => void,
      onErrorFunction: (error: Error) => void
    ) {
      const {
        mutate: updateNote,
        onDone,
        onError,
      } = useMutation(UpdateNoteDocument);
      onDone(() => {
        onDoneFunction();
      });
      onError((error) => {
        onErrorFunction(error);
      });
      updateNote(
        {
          input: {
            id: modifiedNote.id,
            fields: {
              content: modifiedNote.content,
            },
          },
        },
        {
          refetchQueries: [
            {
              query: GetNotesDocument,
            },
          ],
        }
      );
    },

    processGetNotesResult(result: GetNotesQuery) {
      this.notes = result.notes.edges
        ? result.notes.edges.map(
            (note) => <Note>{ id: note?.node?.id, content: note?.node?.content }
          )
        : [];
    },
  },
});
