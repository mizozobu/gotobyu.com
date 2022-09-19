import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  type TickOptions,
} from 'chart.js';
import ChartDataLabels, { type Context } from 'chartjs-plugin-datalabels';
import type { ComponentPropsWithoutRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { NODE_ENV } from '@/config';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);
Chart.register(ChartDataLabels);

/**
 * Props for {@link BarChart}
 */
export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Bar>, 'options'> {
  /** Chart title */
  title: string;
  /** Function to format y axis label */
  yAxesTicksCallback?: TickOptions['callback'];
  /** Function to format label */
  labelCallback?: (value: number, ctx: Context) => string;
  /** Whether to show data label */
  enableDataLable?: boolean;
  /** Whether to show tooltip */
  enableTooltip?: boolean;
}

/**
 * Bar chart
 */
export const BarChart = ({
  data,
  title,
  yAxesTicksCallback,
  labelCallback,
  enableDataLable = false,
  enableTooltip = false,
  ...props
}: Props): JSX.Element => (
  <Bar
    data={data}
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
        },
        tooltip: {
          enabled: enableTooltip,
        },
      },
      scales: {
        xAxes: {
          grid: {
            display: false,
          },
        },
        yAxes: {
          ticks: {
            callback: yAxesTicksCallback,
          },
        },
      },
    }}
    {...props}
  />
);
