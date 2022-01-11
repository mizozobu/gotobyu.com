import { FC } from 'react';
import { Seo } from '@cmp/organisms/Seo';
import { IndexPage } from '@cmp/pages/IndexPage';
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
