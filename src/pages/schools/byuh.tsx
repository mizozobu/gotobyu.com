import { Seo } from '@cmp/ecosystems/Seo';
import ByuhEnvironment from '@cmp/environments/schools/byuh.mdx';
import { BYUH_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

const ByuhPage = () => (
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
