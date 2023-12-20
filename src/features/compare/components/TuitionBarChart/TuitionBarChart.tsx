import type { ComponentPropsWithoutRef } from 'react';
import { getForex } from '@/features/forex';
import { TuitionBarChart as ClientTuitionBarChart } from './TuitionBarChart.client';

/**
 * Props for {@link TuitionBarChart}
 */
interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof ClientTuitionBarChart>,
    'exrate'
  > {}

/**
 * Server component for {@link ClientTuitionBarChart | TuitionBarChart}
 */
export const TuitionBarChart = async (props: Props): Promise<JSX.Element> => {
  const { exrate } = await getForex('USD', 'JPY');

  return <ClientTuitionBarChart exrate={exrate} {...props} />;
};
