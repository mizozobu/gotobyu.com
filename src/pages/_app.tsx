import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { Footer } from '@c/organisms/Footer';
import Header from '@c/organisms/Header';
import { Title } from '@c/atoms/Title';
import ScrollIntoView from '@c/atoms/ScrollIntoView';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Title />
    <Head>
      <meta name='robots' content='noindex' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <a href='#maincontent' className='sr-only'>
      Skip to main content
    </a>
    <Header />
    <main id='maincontent'>
      <Component {...pageProps} />
    </main>
    <ScrollIntoView />
    <Footer />
  </RecoilRoot>
);

export default MyApp;
