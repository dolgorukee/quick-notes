import { getClientOptions } from '.';
import { ApolloClient } from '@apollo/client/core';

const options = getClientOptions();
export const apolloClient = new ApolloClient(options);
