import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '@c/organisms/Footer';
import { Header } from '@c/organisms/Header';
import { Title } from '@c/atoms/Title';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Title />
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='robots' content='noindex' />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
