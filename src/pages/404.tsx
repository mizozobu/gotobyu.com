import { NextPage } from 'next';
import { Seo } from '@cmp/ecosystems/Seo';
import { ErrorPage } from '@cmp/pages/ErrorPage';

const _404Page: NextPage = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorPage statusCode={404} />
  </>
);

export default _404Page;
