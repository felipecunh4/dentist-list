import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/dist/next-server/lib/router/router';

import { wrapper } from '~store/index';

import '~styles/index.scss';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);
