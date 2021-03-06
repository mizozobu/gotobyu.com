import type { NextPage } from 'next';
import { Seo } from '@c/ecosystems/shared/Seo';
import { ErrorEnvironment } from '@c/environments/error';

/**
 * 500 Page
 */
const _500Page: NextPage<never> = () => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorEnvironment />
  </>
);

export default _500Page;
