import { IClientData } from 'src/pages/components/WaitListModal/types';

import { baseGraphqlCms } from '..';

export class PatientService {
  static create = async (client: IClientData) => {
    try {
      const item = {
        operationName: 'createDentistList',
        query: `mutation createDentistList {\n    createDentistList(data: { name: "${client.name}", phone: "${client.phone}", birth: "${client.birth}", gender: "${client.gender}" }) {\n      id\n      name\n      phone\n      birth\n      gender\n    }\n  }\n`,
      };

      const { data } = await baseGraphqlCms.post('', item);

      return data.data.createDentistList;
    } catch (err) {
      console.log(err);
      throw new Error('PatientService.create error');
    }
  };

  static publish = async (id: string) => {
    try {
      const item = {
        operationName: 'publishDentistList',
        query: `mutation publishDentistList {\n publishDentistList(where: { id: "${id}" }) {\n id \n } \n }`,
      };

      const { data } = await baseGraphqlCms.post('', item);

      return data;
    } catch (err) {
      console.log(err);
      throw new Error('PatientService.publish error');
    }
  };

  static delete = async (id: string) => {
    try {
      const item = {
        operationName: 'deleteDentistList',
        query: `mutation deleteDentistList {\n deleteDentistList(where: {id: "${id}"}) {\n id\n }\n}`,
      };

      const { data } = await baseGraphqlCms.post('', item);

      return data;
    } catch (err) {
      console.log(err);
      throw new Error('PatientService.delete error');
    }
  };

  static update = async (id: string, client: IClientData) => {
    try {
      const item = {
        operationName: 'updateDentistList',
        query: `
        mutation updateDentistList {
          updateDentistList(
            data: {birth: "${client.birth}", gender: "${client.gender}", name: "${client.name}", phone: "${client.phone}"}
            where: {id: "${id}"}
          ) {
            id
            name
            birth
            gender
            phone
          }
        }`,
      };

      const { data } = await baseGraphqlCms.post('', item);

      return data;
    } catch (err) {
      console.log(err);
      throw new Error('PatientService.update error');
    }
  };
}
