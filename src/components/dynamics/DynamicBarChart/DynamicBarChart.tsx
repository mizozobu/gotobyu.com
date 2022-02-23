import dynamic from 'next/dynamic';
import type { Props } from '@cmp/molecules/BarChart';
import { BarChartLoader } from '@cmp/molecules/BarChartLoader';

export const DynamicBarChart = dynamic<Props>(
  () =>
    import('@cmp/molecules/BarChart').then(
      ({ BarChart: Component }) => Component,
    ),
  { loading: () => <BarChartLoader /> },
);
