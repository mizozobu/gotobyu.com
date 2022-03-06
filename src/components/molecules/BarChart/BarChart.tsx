import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  TickOptions,
} from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { ComponentPropsWithoutRef } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(BarElement, CategoryScale, LinearScale, Title);
Chart.register(ChartDataLabels);

/**
 * Props for {@link BarChart}
 */
export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Bar>, 'options'> {
  /** Chart title */
  title: string;
  /** Function to format y axis label */
  yAxesTicksCallback: TickOptions['callback'];
  /** Function to format label */
  labelCallback: (value: number, ctx: Context) => string;
}

/**
 * Bar chart
 */
export const BarChart = ({
  data,
  title,
  yAxesTicksCallback,
  labelCallback,
  ...props
}: Props): JSX.Element => (
  <Bar
    data={data}
    options={{
      maintainAspectRatio: false,
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
