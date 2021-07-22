import { ReactNode } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { ErrorPage } from '@c/pages/ErrorPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _404Page = (): ReactNode => (
  <>
    <Title>エラー</Title>
    <Head>
      <meta name='robots' content='noindex' />
    </Head>

    <ErrorPage statusCode={404} />
  </>
);

export default _404Page;
