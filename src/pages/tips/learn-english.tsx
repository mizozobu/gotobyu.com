import { Seo } from '@cmp/ecosystems/Seo';
import LearnEnglishEnvironment from '@cmp/environments/tips/learn-english.mdx';
import { LEARN_ENGLISH_PAGE_META } from '@d/links';
import { MDX } from '@l/mdx';

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
