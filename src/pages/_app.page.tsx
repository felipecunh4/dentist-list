import { AppProps } from 'next/app';

import { wrapper } from '~store/index';

import '~styles/index.scss';

function App({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
