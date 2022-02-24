import { NextPage } from 'next';
import { Seo } from '@cmp/ecosystems/Seo';
import { ErrorPage } from '@cmp/pages/ErrorPage';

interface Props {
  statusCode?: number;
}

const _ErrorPage: NextPage<Props> = ({ statusCode = 500 }: Props) => (
  <>
    <Seo title='エラー' noindex nofollow />
    <ErrorPage statusCode={statusCode} />
  </>
);

// see https://nextjs.org/docs/advanced-features/custom-error-page#more-advanced-error-page-customizing
_ErrorPage.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default _ErrorPage;
