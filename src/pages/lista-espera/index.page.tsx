import Head from 'next/head';

import client from 'src/graphql/client';
import { GetPatientsQuery } from 'src/graphql/generated/graphql';
import { GET_PATIENTS } from 'src/graphql/queries';

import { IListaEsperaProps } from './types';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TableClients from './components/TableClients/TableClients';

function ListaEspera(props: IListaEsperaProps) {
  return (
    <>
      <Head>
        <title>Consultorio.me - Lista de Espera</title>
        <meta
          name="description"
          content="Consultorio.me - Faça sua consulta a qualquer hora e lugar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <TableClients data={props.dentistLists} />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const { dentistLists } = await client.request<GetPatientsQuery>(GET_PATIENTS);

  return {
    props: {
      dentistLists,
    },
  };
};

export default ListaEspera;
