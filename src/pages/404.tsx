import { NextPage } from 'next';
import { Seo } from '@cmp/ecosystems/shared/Seo';
import { ErrorEnvironment } from '@cmp/environments/error';

const _404Page: NextPage = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorEnvironment message='このページは存在しません。' />
  </>
);

export default _404Page;
