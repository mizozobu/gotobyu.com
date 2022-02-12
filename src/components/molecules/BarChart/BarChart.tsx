import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  TickOptions,
} from 'chart.js';
import { ComponentPropsWithoutRef } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

export interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Bar>, 'options'> {
  title: string;
  yAxesTicksCallback: TickOptions['callback'];
}

export const BarChart = ({
  data,
  title,
  yAxesTicksCallback,
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
