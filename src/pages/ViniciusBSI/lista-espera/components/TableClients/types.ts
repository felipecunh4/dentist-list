import { IClientData } from 'src/pages/components/WaitListModal/types';

import { IDentistList } from '../../types';

export interface ITableClientsProps {
  data: IDentistList[];
}

export interface IPatientUpdate extends IClientData {
  id: string;
}
