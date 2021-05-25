import { AppProps } from 'next/app';
import { FC } from 'react';
import { Header } from '@c/Header';
import { Footer } from '@c/Footer';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
