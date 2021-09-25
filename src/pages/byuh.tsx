import { FC } from 'react';
import { BYUHPage } from '@c/pages/BYUHPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUHPage: FC<Props> = () => (
  <>
    <Seo
      title='BYUHの紹介'
      description='Brigham Young University–Hawaii(BYUH)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。'
      openGraph={{
        type: 'article',
        title: 'BYUHの紹介',
        description:
          'Brigham Young University–Hawaii(BYUH)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。',
      }}
    />

    <BYUHPage />
  </>
);

export default _BYUHPage;
