import { Seo } from '@cmp/ecosystems/Seo';
import InternshipEnvironment from '@cmp/environments/tips/internship.mdx';
import { INTERNSHIP_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

const InternshipPage = () => (
  <>
    <Seo
      title={INTERNSHIP_PAGE_META.title}
      description={INTERNSHIP_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: INTERNSHIP_PAGE_META.title,
        description: INTERNSHIP_PAGE_META.description,
      }}
    />
    <InternshipEnvironment components={MDX} />
  </>
);

export default InternshipPage;
