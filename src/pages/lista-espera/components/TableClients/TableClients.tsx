import { ITableClientsProps } from './types';

import scss from './TableClients.module.scss';

function TableClients(props: ITableClientsProps) {
  const onUpdatePatient = (id: string) => {
    console.log('id', id);
  };

  const onDeletePatient = (id: string) => {
    console.log('id', id);
  };

  const renderClients = () =>
    props.data.map((client, idx) => (
      <tr className={scss.tableRow} key={client.id}>
        <td className={scss.position}>{idx + 1}</td>
        <td>{client.name}</td>
        <td className={scss.buttonsWrapper}>
          <button
            type="button"
            onClick={() => {
              onUpdatePatient(client.id);
            }}
            className={scss.btn}
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => {
              onDeletePatient(client.id);
            }}
            className={scss.btn}
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
    </div>
  );
}

export default TableClients;
