import { Seo } from '@c/ecosystems/shared/Seo';
import LearnEnglishEnvironment from '@c/environments/tips/learn-english.mdx';
import { LEARN_ENGLISH_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

/**
 * Learn English Page
 */
const LearnEnglishPage = () => (
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
    <LearnEnglishEnvironment components={MDX} />
  </>
);

export default LearnEnglishPage;
