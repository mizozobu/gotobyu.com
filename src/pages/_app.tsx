import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '@c/Footer';
import { Header } from '@c/Header';
import { Title } from '@c/Title';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Title />
    <Head>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
