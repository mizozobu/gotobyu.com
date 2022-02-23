import dynamic from 'next/dynamic';
import type { Props } from '@cmp/molecules/PieChart';
import { PieChartLoader } from '@cmp/molecules/PieChartLoader';

export const DynamicPieChart = dynamic<Props>(
  () =>
    import('@cmp/molecules/PieChart').then(
      ({ PieChart: Component }) => Component,
    ),
  { loading: () => <PieChartLoader /> },
);
