import { provideApolloClient, useMutation } from '@vue/apollo-composable';
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { apolloClient } from 'src/apollo/clients';
import { User } from 'src/components/models';
import {
  LogInDocument,
  LogInMutation,
  SignUpDocument,
} from 'src/graphql/generated';

provideApolloClient(apolloClient);

export interface AuthState {
  user?: User;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: undefined,
  }),
  getters: {},
  actions: {
    signUp(
      email: string,
      password: string,
      onDoneFunction: () => void,
      onErrorFunction: (error: Error) => void
    ) {
      const { mutate: signUp, onDone, onError } = useMutation(SignUpDocument);
      onDone(() => {
        onDoneFunction();
      });
      onError((error) => {
        onErrorFunction(error);
      });
      signUp({
        input: {
          fields: {
            username: email,
            password: password,
            email: email,
          },
        },
      });
    },

    async logIn(
      email: string,
      password: string,
      onDoneFunction: () => void,
      onErrorFunction: (error: Error) => void
    ) {
      const { mutate: logIn, onDone, onError } = useMutation(LogInDocument);
      onDone((result) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.setUserAndSessionToken(result.data!);
        onDoneFunction();
      });
      onError((error) => {
        onErrorFunction(error);
      });
      logIn({
        input: {
          username: email,
          password: password,
        },
      });
    },

    setUserAndSessionToken(logInMutation: LogInMutation) {
      this.user = {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: logInMutation.logIn!.viewer.user.id,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        email: logInMutation.logIn!.viewer.user.username!,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        sessionToken: logInMutation.logIn!.viewer.sessionToken,
      };
      LocalStorage.set(
        'quickNotesSessionToken',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        logInMutation.logIn!.viewer.sessionToken
      );
    },
  },
});
