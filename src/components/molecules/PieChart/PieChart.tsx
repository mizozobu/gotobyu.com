import { FC, HTMLAttributes } from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  options?: ChartOptions<'pie'>;
  data: ChartData<'pie'>;
}

const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
};

export const PieChart: FC<Props> = ({
  data,
  options = defaultOptions,
  ...props
}: Props) => (
  <div {...props}>
    <Pie type='pie' data={data} options={options} />
  </div>
);
