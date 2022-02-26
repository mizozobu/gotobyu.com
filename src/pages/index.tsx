import { Seo } from '@cmp/ecosystems/Seo';
import { IndexPage } from '@cmp/environments/IndexPage';
import { INDEX_PAGE_META } from '@d/links';

const _IndexPage = () => (
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
