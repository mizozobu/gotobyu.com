import type { Metadata } from 'next';
import { Error } from '@/features/error';

export const metadata: Metadata = {
  title: 'エラー',
  robots: { index: false, follow: false },
};

/**
 * Not found page
 */
const NotFoundPage = (): JSX.Element => (
  <Error message='このページは存在しません。' />
);

export default NotFoundPage;
