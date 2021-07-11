import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { LearnEnglishPage } from '@c/pages/LearnEnglishPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _LearnEnglishPage: FC<Props> = () => (
  <>
    <Title>英語の勉強方法</Title>
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。'
      />
    </Head>

    <LearnEnglishPage />
  </>
);

export default _LearnEnglishPage;
