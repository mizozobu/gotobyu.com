import { ReactNode } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { ErrorPage } from '@c/pages/ErrorPage';

export interface Props {
  statusCode: number;
}

// eslint-disable-next-line no-underscore-dangle
const _ErrorPage = ({ statusCode }: Props): ReactNode => (
  <>
    <Title>エラー</Title>
    <Head>
      <meta name='robots' content='noindex' />
    </Head>

    <ErrorPage statusCode={statusCode} />
  </>
);

_ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default _ErrorPage;
