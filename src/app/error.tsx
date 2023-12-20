/* eslint-disable no-restricted-syntax */

'use client';

import { useEffect } from 'react';
import { Error } from '@/features/error';

/**
 * Props for {@link ErrorPage}
 */
interface Props {
  /** Error */
  error: Error & { digest?: string };
  /** Rerender for recovery */
  reset: () => void; // eslint-disable-line react/no-unused-prop-types
}

/**
 * Error page
 */
const ErrorPage = ({ error }: Props): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return <Error message='エラーが発生しました。' />;
};

export default ErrorPage;
