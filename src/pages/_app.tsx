import { AppProps } from 'next/app';
import Head from 'next/head'
import Script from 'next/script';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://analytics.codenn.de/tracker.js" data-ackee-server="https://analytics.codenn.de" data-ackee-domain-id="2257f02c-01a9-4376-96b7-a3bc84e3eaa4"></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
