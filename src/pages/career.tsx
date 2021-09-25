import { FC } from 'react';
import { CareerPage } from '@c/pages/CareerPage';
import { Seo } from '@c/organisms/Seo';
import { CareerPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _CareerPage: FC<Props> = () => (
  <>
    <Seo
      title={CareerPageMeta.title}
      description={CareerPageMeta.description}
      openGraph={{
        type: 'article',
        title: CareerPageMeta.title,
        description: CareerPageMeta.description,
      }}
    />

    <CareerPage />
  </>
);

export default _CareerPage;
