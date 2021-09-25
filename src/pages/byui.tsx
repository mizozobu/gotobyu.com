import { FC } from 'react';
import { BYUIPage } from '@c/pages/BYUIPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUIPage: FC<Props> = () => (
  <>
    <Seo
      title='BYUIの紹介'
      description='Brigham Young University - Idaho(BYUI)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。'
      openGraph={{
        type: 'article',
        title: 'BYUIの紹介',
        description:
          'Brigham Young University - Idaho(BYUI)の紹介です。在学生と卒業生の経験を元に、専攻、衣住食、クラブ、アルバイト、奨学金についてまとめています。',
      }}
    />

    <BYUIPage />
  </>
);

export default _BYUIPage;
