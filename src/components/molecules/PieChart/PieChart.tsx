import { Chart, ArcElement, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { Options } from 'chartjs-plugin-datalabels/types/options';
import type { ComponentPropsWithoutRef } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.defaults.font.family =
  "'Noto Sans JP', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
Chart.register(ArcElement, Title);
Chart.register(ChartDataLabels);

/**
 * Props for {@link PieChart}
 */
export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Pie>, 'options'> {
  /** Chart title */
  title: string;
  /** Function to format label */
  labelCallback: Options['formatter'];
}

/**
 * Pie chart
 */
export const PieChart = ({
  title,
  labelCallback,
  ...props
}: Props): JSX.Element => (
  <Pie
    options={{
      maintainAspectRatio: false,
      animation: {
        /** disable animation for for VRT */
        duration: process.env.NEXT_PUBLIC_NODE_ENV === 'test' ? 0 : undefined,
      },
      plugins: {
        title: {
          display: true,
          text: title,
        },
        datalabels: {
          color: 'rgb(255, 255, 255)',
          backgroundColor: 'rgba(55, 48, 163, 0.2)',
          borderRadius: 4,
          formatter: labelCallback,
          textAlign: 'center',
        },
      },
    }}
    {...props}
  />
);
