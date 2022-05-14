export interface IDentistList {
  id: string;
  birth: string;
  gender: string;
  name: string;
  phone: string;
}

export interface IListaEsperaProps {
  dentistLists: IDentistList[];
}
