import { FC } from 'react';
import Head from 'next/head';
import { Title } from '@c/atoms/Title';
import { BYUIPage } from '@c/pages/BYUIPage';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUIPage: FC<Props> = () => (
  <>
    <Title>BYUIの紹介</Title>
    <Head>
      <meta
        name='description'
        content='Brigham Young University - Idaho(BYUI)についての紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金について深堀りします。'
      />
    </Head>

    <BYUIPage />
  </>
);

export default _BYUIPage;
