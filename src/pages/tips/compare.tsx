import type { GetStaticProps } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import CompareEnvironment from '@c/environments/tips/compare.mdx';
import { COMPARE_PAGE_META } from '@d/links';
import { indexDocument } from '@l/algolia/node';
import { getForex } from '@l/forex';
import { MDX } from '@l/mdx';
import { AtomStore } from '@l/recoil';
import { defaultForexState, FOREX_STATE_KEY } from '@s/forex';

/**
 * getStaticProps for BYUI Page
 */
export const getStaticProps: GetStaticProps = async () => {
  const atomStore = new AtomStore();
  const forex = process.env.ALPHA_VANTAGE_API_KEY
    ? await getForex('USD', 'JPY')
    : defaultForexState;
  atomStore.setAtom(FOREX_STATE_KEY, forex);
  await indexDocument(COMPARE_PAGE_META.href);
  return atomStore.with({
    revalidate: 60 * 12,
  });
};

/**
 * Compare Page
 */
const ComparePage = () => (
  <>
    <Seo
      title={COMPARE_PAGE_META.title}
      description={COMPARE_PAGE_META.description}
      openGraph={{
        type: 'article',
        title: COMPARE_PAGE_META.title,
        description: COMPARE_PAGE_META.description,
      }}
    />
    <CompareEnvironment components={MDX} />
  </>
);

export default ComparePage;
