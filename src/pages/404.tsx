import { NextPage } from 'next';
import { ErrorPage } from '@cmp/pages/ErrorPage';
import { Seo } from '@cmp/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _404Page: NextPage<Props> = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorPage statusCode={404} />
  </>
);

export default _404Page;
