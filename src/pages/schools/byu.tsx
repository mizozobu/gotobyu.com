import type { NextPage } from 'next';
import { BYU_PAGE_META } from '@/data/links';
import { Byu } from '@/features/byu';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

/**
 * BYU Page
 */
const ByuPage: NextPage<never> = () => (
  <>
    <Seo
      title={BYU_PAGE_META.title}
      description={BYU_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: BYU_PAGE_META.title,
        description: BYU_PAGE_META.description,
      }}
    />
    <Byu components={MDX} />
  </>
);

export default ByuPage;
