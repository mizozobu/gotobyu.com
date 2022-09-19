import type { NextPage } from 'next';
import { Error } from '@/features/misc';
import { Seo } from '@/lib/seo';

/**
 * 404 Page
 */
const _404Page: NextPage<never> = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <Error message='このページは存在しません。' />
  </>
);

export default _404Page;
