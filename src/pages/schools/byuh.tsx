import type { NextPage } from 'next';
import { BYUH_PAGE_META } from '@/data/links';
import { Byuh } from '@/features/byuh';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

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
    <Byuh components={MDX} />
  </>
);

export default ByuhPage;
