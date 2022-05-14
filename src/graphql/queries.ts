import { gql } from 'graphql-request';

export const GET_PATIENTS = gql`
  query getPatients {
    dentistLists {
      id
      birth
      gender
      name
      phone
    }
  }
`;

export const CREATE_PATIENT = gql`
  mutation createDentistList {
    createDentistList(data: { name: "teste", phone: "teste", birth: "teste", gender: "teste" }) {
      id
      name
      phone
      birth
      gender
    }
  }
`;
