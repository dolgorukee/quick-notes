import {
  ApolloClientOptions,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { LocalStorage } from 'quasar';

export function getClientOptions() {
  const authLink = new ApolloLink((operation, forward) => {
    const sessionToken = LocalStorage.getItem('quickNotesSessionToken');

    operation.setContext({
      headers: {
        'X-Parse-Application-Id': process.env.BACK4APP_APPLICATION_ID,
        'X-Parse-Client-Key': process.env.BACK4APP_CLIENT_KEY,
        'X-Parse-Session-Token': sessionToken || '',
      },
    });

    return forward(operation);
  });

  return <ApolloClientOptions<unknown>>Object.assign(<
    ApolloClientOptions<unknown>
  >{
    link: authLink.concat(
      createHttpLink({
        uri: process.env.BACK4APP_GQL_SERVER_URL,
      })
    ),

    cache: new InMemoryCache(),
  });
}
