import type { NextPage } from 'next';
import { INDEX_PAGE_META } from '@/data/links';
import { Index } from '@/features/misc';
import { Seo } from '@/lib/seo';

/**
 * Index Page
 */
const IndexPage: NextPage<never> = () => (
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
    <Index />
  </>
);

export default IndexPage;
