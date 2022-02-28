import { Seo } from '@cmp/ecosystems/Seo';
import { IndexEnvironment } from '@cmp/environments/index';
import { INDEX_PAGE_META } from '@d/links';

const IndexPage = () => (
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
    <IndexEnvironment />
  </>
);

export default IndexPage;
