import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { CareerPage } from '@c/pages/CareerPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _CareerPage: FC<Props> = () => (
  <>
    <Title>キャリア</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。'
      />
    </Head>

    <CareerPage />
  </>
);

export default _CareerPage;
