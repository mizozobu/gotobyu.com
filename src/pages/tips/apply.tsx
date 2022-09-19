import type { NextPage } from 'next';
import { APPLY_PAGE_META } from '@/data/links';
import { Apply } from '@/features/apply';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

/**
 * Apply Page
 */
const ApplyPage: NextPage<never> = () => (
  <>
    <Seo
      title={APPLY_PAGE_META.title}
      description={APPLY_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: APPLY_PAGE_META.title,
        description: APPLY_PAGE_META.description,
      }}
    />
    <Apply components={MDX} />
  </>
);

export default ApplyPage;
