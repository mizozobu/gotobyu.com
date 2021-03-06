import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import CareerEnvironment from '@c/environments/tips/career.mdx';
import { CAREER_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

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
    <CareerEnvironment components={MDX} />
  </>
);

export default CareerPage;
