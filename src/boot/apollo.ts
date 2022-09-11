import { ApolloClient /*, createHttpLink */ } from '@apollo/client/core';
import { ApolloClients } from '@vue/apollo-composable';
import { boot } from 'quasar/wrappers';
import { apolloClient } from 'src/apollo/clients';

export default boot(({ app }) => {
  const apolloClients: Record<string, ApolloClient<unknown>> = {
    default: apolloClient,
  };

  app.provide(ApolloClients, apolloClients);
});
