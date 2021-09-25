import { FC } from 'react';
import { BYUPage } from '@c/pages/BYUPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUPage: FC<Props> = () => (
  <>
    <Seo
      title='BYUの紹介'
      description='Brigham Young University(BYU)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。'
      openGraph={{
        type: 'article',
        title: 'BYUの紹介',
        description:
          'Brigham Young University(BYU)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。',
      }}
    />

    <BYUPage />
  </>
);

export default _BYUPage;
