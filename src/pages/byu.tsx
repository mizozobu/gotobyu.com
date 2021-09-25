import { FC } from 'react';
import { BYUPage } from '@c/pages/BYUPage';
import { Seo } from '@c/organisms/Seo';
import { BYUPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _BYUPage: FC<Props> = () => (
  <>
    <Seo
      title={BYUPageMeta.title}
      description={BYUPageMeta.description}
      openGraph={{
        type: 'article',
        title: BYUPageMeta.title,
        description: BYUPageMeta.description,
      }}
    />

    <BYUPage />
  </>
);

export default _BYUPage;
