import type { NextPage, GetStaticProps } from 'next';
import { ALPHA_VANTAGE_API_KEY } from '@/config';
import { COMPARE_PAGE_META } from '@/data/links';
import { Compare } from '@/features/compare';
import { FOREX_STATE_KEY, getForex } from '@/features/forex';
import { MDX } from '@/features/mdx';
import { AtomStore } from '@/lib/recoil';
import { Seo } from '@/lib/seo';

/**
 * getStaticProps for Compare Page
 */
export const getStaticProps: GetStaticProps = async () => {
  const atomStore = new AtomStore();

  if (ALPHA_VANTAGE_API_KEY) {
    const forex = await getForex('USD', 'JPY');
    atomStore.setAtom(FOREX_STATE_KEY, forex);
  }

  return atomStore.with({
    revalidate: 60 * 12,
  });
};

/**
 * Compare Page
 */
const ComparePage: NextPage<never> = (): JSX.Element => (
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
    <Compare components={MDX} />
  </>
);

export default ComparePage;
