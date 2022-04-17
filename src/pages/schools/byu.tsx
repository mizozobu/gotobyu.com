import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import ByuEnvironment from '@c/environments/schools/byu.mdx';
import { BYU_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

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
    <ByuEnvironment components={MDX} />
  </>
);

export default ByuPage;
