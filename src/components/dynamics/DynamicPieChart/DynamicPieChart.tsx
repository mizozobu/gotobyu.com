import dynamic from 'next/dynamic';
import type { Props } from '@c/molecules/PieChart';
import { PieChartLoader } from '@c/molecules/PieChartLoader';

/**
 * Dynamic PieChart with loader
 */
export const DynamicPieChart = dynamic<Props>(
  () =>
    import('@c/molecules/PieChart').then(
      ({ PieChart: Component }) => Component,
    ),
  { loading: () => <PieChartLoader /> },
);
