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
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicons/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='robots' content='noindex' />
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
