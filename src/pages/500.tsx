import { NextPage } from 'next';
import { Seo } from '@cmp/ecosystems/Seo';
import { ErrorEnvironment } from '@cmp/environments/error';

const _500Page: NextPage = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorEnvironment />
  </>
);

export default _500Page;
