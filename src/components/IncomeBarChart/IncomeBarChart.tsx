import { FC } from 'react';
import { BarChart, Props as BarChartProps } from '@c/BarChart';

export interface Props extends Omit<BarChartProps, 'data'> {}

const data = {
  labels: ['高卒', '高専/短大卒', '大卒', '修士', 'BYU'],
  datasets: [
    {
      data: [220, 240, 277, 315, 523],
      backgroundColor: [
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 1)',
      ],
      borderColor: [
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const IncomeBarChart: FC<Props> = (props: Props) => (
  <BarChart {...props} data={data} />
);
