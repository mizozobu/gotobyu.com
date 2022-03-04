import dynamic from 'next/dynamic';
import type { Props } from '@c/molecules/BarChart';
import { BarChartLoader } from '@c/molecules/BarChartLoader';

export const DynamicBarChart = dynamic<Props>(
  () =>
    import('@c/molecules/BarChart').then(
      ({ BarChart: Component }) => Component,
    ),
  { loading: () => <BarChartLoader /> },
);
