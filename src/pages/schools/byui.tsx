import type { NextPage } from 'next';
import { BYUI_PAGE_META } from '@/data/links';
import { Byui } from '@/features/byui';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

/**
 * BYUI Page
 */
const ByuiPage: NextPage<never> = () => (
  <>
    <Seo
      title={BYUI_PAGE_META.title}
      description={BYUI_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: BYUI_PAGE_META.title,
        description: BYUI_PAGE_META.description,
      }}
    />
    <Byui components={MDX} />
  </>
);

export default ByuiPage;
