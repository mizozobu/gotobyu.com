import type { NextPage } from 'next';
import { ABOUT_PAGE_META } from '@/data/links';
import { MDX } from '@/features/mdx';
import { About } from '@/features/misc';
import { Seo } from '@/lib/seo';

/**
 * About Page
 */
const AboutPage: NextPage<never> = () => (
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
    <About components={MDX} />
  </>
);

export default AboutPage;
