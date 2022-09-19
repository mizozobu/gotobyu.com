import type { NextPage } from 'next';
import { INTERNSHIP_PAGE_META } from '@/data/links';
import { Internship } from '@/features/internship';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

/**
 * Internship Page
 */
const InternshipPage: NextPage<never> = (): JSX.Element => (
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
    <Internship components={MDX} />
  </>
);

export default InternshipPage;
