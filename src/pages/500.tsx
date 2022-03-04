import { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import { ErrorEnvironment } from '@c/environments/error';

const _500Page: NextPage = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorEnvironment />
  </>
);

export default _500Page;
