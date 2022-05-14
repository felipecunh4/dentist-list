import { GraphQLClient } from 'graphql-request';

export const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_HOST || '';

export const headers = {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
};

const client = new GraphQLClient(endpoint, {
  headers,
});

export default client;
