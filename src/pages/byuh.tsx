import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { BYUHPage } from '@c/pages/BYUHPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUHPage: FC<Props> = () => (
  <>
    <Title>BYUHの紹介</Title>
    <Head>
      <meta
        name='description'
        content='Brigham Young University–Hawaii(BYUH)についての紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金について深堀りします。'
      />
    </Head>

    <BYUHPage />
  </>
);

export default _BYUHPage;
