import type { NextPage } from 'next';
import { CAREER_PAGE_META } from '@/data/links';
import { Career } from '@/features/career';
import { MDX } from '@/features/mdx';
import { Seo } from '@/lib/seo';

/**
 * Career Page
 */
const CareerPage: NextPage<never> = () => (
  <>
    <Seo
      title={CAREER_PAGE_META.title}
      description={CAREER_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: CAREER_PAGE_META.title,
        description: CAREER_PAGE_META.description,
      }}
    />
    <Career components={MDX} />
  </>
);

export default CareerPage;
