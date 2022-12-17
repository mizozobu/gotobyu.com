import { Chart, ArcElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { Options } from 'chartjs-plugin-datalabels/types/options';
import type { ComponentPropsWithoutRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { NODE_ENV } from '@/config';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
Chart.register(ArcElement, Title, Tooltip);
Chart.register(ChartDataLabels);

/**
 * Props for {@link PieChart}
 */
export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Pie>, 'options'> {
  /** Chart title */
  title: string;
  /** Function to format label */
  labelCallback?: Options['formatter'];
  /** Whether to show data label */
  enableDataLable?: boolean;
  /** Whether to show tooltip */
  enableTooltip?: boolean;
}

/**
 * Pie chart
 */
export const PieChart = ({
  title,
  labelCallback,
  enableDataLable = false,
  enableTooltip = false,
  ...props
}: Props): JSX.Element => (
  <Pie
    options={{
      maintainAspectRatio: false,
      animation: {
        /** disable animation for for VRT */
        duration: NODE_ENV === 'test' ? 0 : undefined,
      },
      plugins: {
        title: {
          display: true,
          text: title,
        },
        datalabels: {
          display: enableDataLable,
          color: 'rgb(255, 255, 255)',
          backgroundColor: 'rgba(55, 48, 163, 0.2)',
          borderRadius: 4,
          formatter: labelCallback,
          textAlign: 'center',
        },
        tooltip: {
          enabled: enableTooltip,
        },
      },
    }}
    {...props}
  />
);
