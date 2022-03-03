import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  TickOptions,
} from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { ComponentPropsWithoutRef } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);
Chart.register(ChartDataLabels);

export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Bar>, 'options'> {
  title: string;
  yAxesTicksCallback: TickOptions['callback'];
  labelCallback: (value: number, ctx: Context) => string;
}

export const BarChart = ({
  data,
  title,
  yAxesTicksCallback,
  labelCallback,
  ...props
}: Props) => (
  <Bar
    data={data}
    options={{
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
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
