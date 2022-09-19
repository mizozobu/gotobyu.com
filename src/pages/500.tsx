import type { NextPage } from 'next';
import { Error } from '@/features/misc';
import { Seo } from '@/lib/seo';

/**
 * 500 Page
 */
const _500Page: NextPage<never> = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <Error />
  </>
);

export default _500Page;
