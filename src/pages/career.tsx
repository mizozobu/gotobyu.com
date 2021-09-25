import { FC } from 'react';
import { CareerPage } from '@c/pages/CareerPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _CareerPage: FC<Props> = () => (
  <>
    <Seo
      title='就職'
      description='BYU、BYUH、BYUIの学生の就職先の企業と1年目の年収についての調査結果です。'
      openGraph={{
        type: 'article',
        title: '就職',
        description:
          'BYU、BYUH、BYUIの学生の就職先の企業と1年目の年収についての調査結果です。',
      }}
    />

    <CareerPage />
  </>
);

export default _CareerPage;
