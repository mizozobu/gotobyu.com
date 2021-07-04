import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { ApplyPage } from '@c/pages/ApplyPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ApplyPage: FC<Props> = () => (
  <>
    <Title>入学手続き</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIへの入学手続きのやり方を紹介しています。締め切り、申込費用、必要な英語力について紹介しています。'
      />
    </Head>

    <ApplyPage />
  </>
);

export default _ApplyPage;
