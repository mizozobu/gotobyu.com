import type { NextPage } from 'next';
import { LEARN_ENGLISH_PAGE_META } from '@/data/links';
import { MDX } from '@/features/mdx';
import { LearnEnglish } from '@/features/misc';
import { Seo } from '@/lib/seo';

/**
 * Learn English Page
 */
const LearnEnglishPage: NextPage<never> = (): JSX.Element => (
  <>
    <Seo
      title={LEARN_ENGLISH_PAGE_META.title}
      description={LEARN_ENGLISH_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: LEARN_ENGLISH_PAGE_META.title,
        description: LEARN_ENGLISH_PAGE_META.description,
      }}
    />
    <LearnEnglish components={MDX} />
  </>
);

export default LearnEnglishPage;
