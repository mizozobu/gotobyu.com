import { Seo } from '@c/ecosystems/shared/Seo';
import { IndexEnvironment } from '@c/environments/index';
import { INDEX_PAGE_META } from '@d/links';

/**
 * Index Page
 */
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
