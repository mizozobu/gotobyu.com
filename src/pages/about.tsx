import { Seo } from '@c/ecosystems/shared/Seo';
import AboutEnvironment from '@c/environments/about.mdx';
import { ABOUT_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

const AboutPage = () => (
  <>
    <Seo
      title={ABOUT_PAGE_META.title}
      description={ABOUT_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: ABOUT_PAGE_META.title,
        description: ABOUT_PAGE_META.description,
      }}
    />
    <AboutEnvironment components={MDX} />
  </>
);

export default AboutPage;
