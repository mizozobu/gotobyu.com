import { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import { ErrorEnvironment } from '@c/environments/error';

/**
 * 404 Page
 */
const _404Page: NextPage = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorEnvironment message='このページは存在しません。' />
  </>
);

export default _404Page;
