import { FC, HTMLAttributes } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  options?: ChartOptions<'bar'>;
  data: ChartData<'bar'>;
}

const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      grid: {
        display: false,
      },
    },
  },
};

export const BarChart: FC<Props> = ({
  data,
  options = defaultOptions,
  ...props
}: Props) => (
  <div {...props}>
    <Bar type='bar' data={data} options={options} />
  </div>
);
