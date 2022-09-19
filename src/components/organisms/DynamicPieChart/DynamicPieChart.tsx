import dynamic from 'next/dynamic';
import type { Props } from '@/components/molecules/PieChart';
import { PieChartLoader } from '@/components/molecules/PieChartLoader';

/**
 * Dynamically imported PieChart with loader
 */
export const DynamicPieChart = dynamic<Props>(
  () =>
    import('@/components/molecules/PieChart').then(
      ({ PieChart: Component }) => Component,
    ),
  { loading: () => <PieChartLoader data-testid='loader' /> },
);
