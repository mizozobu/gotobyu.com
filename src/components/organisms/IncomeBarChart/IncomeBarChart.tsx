import { FC } from 'react';
import { BarChart, Props as BarChartProps } from '@c/molecules/BarChart';

export interface Props extends Omit<BarChartProps, 'data'> {}

const data = {
  labels: ['高卒', '高専/短大卒', '大卒', '修士', 'BYU'],
  datasets: [
    {
      data: [220, 240, 277, 315, 523],
      backgroundColor: [
        'rgba(49, 46, 129, 0.2)',
        'rgba(49, 46, 129, 0.2)',
        'rgba(49, 46, 129, 0.2)',
        'rgba(49, 46, 129, 0.2)',
        'rgba(49, 46, 129, 1)',
      ],
      borderColor: [
        'rgba(49, 46, 129, 1)',
        'rgba(49, 46, 129, 1)',
        'rgba(49, 46, 129, 1)',
        'rgba(49, 46, 129, 1)',
        'rgba(49, 46, 129, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const IncomeBarChart: FC<Props> = (props: Props) => (
  <BarChart {...props} data={data} />
);
