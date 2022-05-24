import { useState } from 'react';

import { IClientData } from 'src/pages/components/WaitListModal/types';
import WaitListModal from 'src/pages/components/WaitListModal/WaitListModal';

import { PatientService } from '~services/api/patient';

import { IPatientUpdate, ITableClientsProps } from './types';

import scss from './TableClients.module.scss';

function TableClients(props: ITableClientsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [patient, setPatient] = useState({} as IPatientUpdate);
  const [patientsList, setPatientsList] = useState(props.data);

  const onUpdateSubmit = async (data: IClientData) => {
    const newPatientList = patientsList.map((p) => {
      let newPatient = p;
      if (p.id === patient.id) {
        newPatient = {
          id: p.id,
          name: data.name,
          gender: data.gender,
          phone: data.phone,
          birth: data.birth,
        };
      }

      return newPatient;
    });

    setPatientsList(newPatientList);
  };

  const onUpdatePatient = (patientInfo: IPatientUpdate) => {
    setPatient(patientInfo);
    setIsOpen(true);
  };

  const onDeletePatient = async (id: string) => {
    setIsDisabled(true);
    const patientsListUpdated = patientsList.filter((p) => p.id !== id);
    await PatientService.delete(id);
    setPatientsList(patientsListUpdated);
    setIsDisabled(false);
  };

  const renderClients = () =>
    patientsList.map((client, idx) => (
      <tr className={scss.tableRow} key={client.id}>
        <td className={scss.position}>{idx + 1}</td>
        <td>{client.name}</td>
        <td className={scss.buttonsWrapper}>
          <button
            type="button"
            onClick={() => {
              onUpdatePatient(client);
            }}
            className={scss.btn}
            disabled={isDisabled}
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => {
              onDeletePatient(client.id);
            }}
            className={scss.btn}
            disabled={isDisabled}
          >
            Deletar
          </button>
        </td>
      </tr>
    ));

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>Lista de espera de pacientes</h2>
      <table className={scss.table}>
        <tbody className={scss.tbody}>{renderClients()}</tbody>
      </table>
      <WaitListModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        patient={patient.id ? patient : undefined}
        onUpdate={onUpdateSubmit}
      />
    </div>
  );
}

export default TableClients;
