import { FC } from 'react';
import { IndexPage } from '@c/pages/IndexPage';
import { Seo } from '@c/organisms/Seo';
import { INDEX_PAGE_META } from '@d';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _IndexPage: FC<Props> = () => (
  <>
    <Seo
      title={INDEX_PAGE_META.title}
      description={INDEX_PAGE_META.description}
      openGraph={{
        type: 'website',
        title: INDEX_PAGE_META.title,
        description: INDEX_PAGE_META.description,
      }}
    />

    <IndexPage />
  </>
);

export default _IndexPage;
