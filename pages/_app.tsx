import { QueryClientProvider, QueryClient } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as JotaiProvider } from 'jotai';

import { Roboto } from '@next/font/google';

import('../requestSystem/auth/mocks');
import '@/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default App;
