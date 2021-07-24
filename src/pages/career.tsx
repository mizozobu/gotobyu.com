import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { CareerPage } from '@c/pages/CareerPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _CareerPage: FC<Props> = () => (
  <>
    <Title>就職</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIの学生の就職先の企業と1年目の年収についての調査結果を掲載しています。'
      />
    </Head>

    <CareerPage />
  </>
);

export default _CareerPage;
