import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer } from '@c/organisms/Footer';
import Header from '@c/organisms/Header';
import { Title } from '@c/atoms/Title';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const hash = decodeURIComponent(router.asPath.split('#')[1]);
    const elem = document.querySelector(`#${hash}`);
    elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  return (
    <>
      <Title />
      <Head>
        <meta name='robots' content='noindex' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
