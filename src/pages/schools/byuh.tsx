import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import ByuhEnvironment from '@c/environments/schools/byuh.mdx';
import { BYUH_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

/**
 * BYUH Page
 */
const ByuhPage: NextPage<never> = () => (
  <>
    <Seo
      title={BYUH_PAGE_META.title}
      description={BYUH_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: BYUH_PAGE_META.title,
        description: BYUH_PAGE_META.description,
      }}
    />
    <ByuhEnvironment components={MDX} />
  </>
);

export default ByuhPage;
