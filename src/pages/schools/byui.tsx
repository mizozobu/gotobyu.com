import { Seo } from '@cmp/ecosystems/shared/Seo';
import ByuiEnvironment from '@cmp/environments/schools/byui.mdx';
import { BYUI_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

const ByuiPage = () => (
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
