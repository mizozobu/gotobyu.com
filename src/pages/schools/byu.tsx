import { Seo } from '@cmp/ecosystems/Seo';
import ByuEnvironment from '@cmp/environments/schools/byu.mdx';
import { BYU_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

const ByuPage = () => (
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
