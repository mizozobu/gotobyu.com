import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import ApplyEnvironment from '@c/environments/tips/apply.mdx';
import { APPLY_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

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
    <ApplyEnvironment components={MDX} />
  </>
);

export default ApplyPage;
