import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { IndexPage } from '@c/pages/IndexPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _IndexPage: FC<Props> = () => (
  <>
    <Title />
    <Head>
      <meta
        name='description'
        content='BYU、BYUH、BYUIへの入学を考えている方に向けて、各大学の専攻、費用、奨学金について紹介しています。さらに、BYU3校の比較、入学手続き、英語の勉強方法、卒業後のキャリアなどについても紹介しています。'
      />
    </Head>

    <IndexPage />
  </>
);

export default _IndexPage;
