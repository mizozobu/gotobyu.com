import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { BYUPage } from '@c/pages/BYUPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUPage: FC<Props> = () => (
  <>
    <Title>BYUの紹介</Title>
    <Head>
      <meta
        name='description'
        content='Brigham Young University(BYU)についての紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金について深堀りします。'
      />
    </Head>

    <BYUPage />
  </>
);

export default _BYUPage;
