import { FC } from 'react';
import { BarChart, Props as BarChartProps } from '@c/molecules/BarChart';

export interface Props extends Omit<BarChartProps, 'data'> {}

const data = {
  labels: ['大学', 'BYU'],
  datasets: [
    {
      data: [22.6 * 12 + 48.21, 523],
      backgroundColor: ['rgba(49, 46, 129, 0.2)', 'rgba(49, 46, 129, 1)'],
      borderColor: ['rgba(49, 46, 129, 1)', 'rgba(49, 46, 129, 1)'],
      borderWidth: 1,
    },
  ],
};

export const IncomeBarChart: FC<Props> = (props: Props) => (
  <BarChart {...props} data={data} />
);
