import dynamic from 'next/dynamic';
import type { Props } from '@/components/molecules/BarChart';
import { BarChartLoader } from '@/components/molecules/BarChartLoader';

/**
 * Dynamically imported BarChart with loader
 */
export const DynamicBarChart = dynamic<Props>(
  () =>
    import('@/components/molecules/BarChart').then(
      ({ BarChart: Component }) => Component,
    ),
  { loading: () => <BarChartLoader data-testid='loader' /> },
);
