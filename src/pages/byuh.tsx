import { FC } from 'react';
import { BYUHPage } from '@c/pages/BYUHPage';
import { Seo } from '@c/organisms/Seo';
import { BYUHPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUHPage: FC<Props> = () => (
  <>
    <Seo
      title={BYUHPageMeta.title}
      description={BYUHPageMeta.description}
      openGraph={{
        type: 'article',
        title: BYUHPageMeta.title,
        description: BYUHPageMeta.description,
      }}
    />

    <BYUHPage />
  </>
);

export default _BYUHPage;
