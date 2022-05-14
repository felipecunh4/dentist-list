import axios from 'axios';

export const baseGraphqlCms = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
  },
});
