import { QueryClientProvider, QueryClient } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
