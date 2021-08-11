import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { ComparePage } from '@c/pages/ComparePage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _ComparePage: FC<Props> = () => (
  <>
    <Title>BYU、BYUH、BYUIを比較</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIを費用、生徒数、専攻数、英語力などの面で比較します。'
      />
    </Head>

    <ComparePage />
  </>
);

export default _ComparePage;
