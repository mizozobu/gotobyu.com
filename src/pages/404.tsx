import { NextPage } from 'next';
import { ErrorPage } from '@c/pages/ErrorPage';
import { Seo } from '@c/organisms/Seo';

export interface Props {}

// eslint-disable-next-line no-underscore-dangle
const _404Page: NextPage<Props> = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorPage statusCode={404} />
  </>
);

export default _404Page;
