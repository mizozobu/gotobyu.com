import { FC } from 'react';
import { IndexPage } from '@c/pages/IndexPage';
import { Seo } from '@c/organisms/Seo';
import { IndexPageMeta } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _IndexPage: FC<Props> = () => (
  <>
    <Seo
      title={IndexPageMeta.title}
      description={IndexPageMeta.description}
      openGraph={{
        type: 'website',
        title: IndexPageMeta.title,
        description: IndexPageMeta.description,
      }}
    />

    <IndexPage />
  </>
);

export default _IndexPage;
