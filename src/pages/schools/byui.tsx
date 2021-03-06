import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import ByuiEnvironment from '@c/environments/schools/byui.mdx';
import { BYUI_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

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
    <ByuiEnvironment components={MDX} />
  </>
);

export default ByuiPage;
