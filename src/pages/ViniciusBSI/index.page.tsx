import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Schedule from '../components/Schedule/Schedule';

function Home() {
  return (
    <>
      <Head>
        <title>Consultorio.me</title>
        <meta
          name="description"
          content="Consultorio.me - Faça sua consulta a qualquer hora e lugar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Schedule />
      </main>
      <Footer />
    </>
  );
}

export default Home;
