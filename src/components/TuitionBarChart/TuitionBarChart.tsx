import { FC } from 'react';
import { BarChart, Props as BarChartProps } from '@c/BarChart';

export interface Props extends Omit<BarChartProps, 'data'> {}

const data = {
  labels: [
    'BYU教会員',
    'BYU非教会員',
    '日本国立',
    '日本私立',
    'アメリカ国立',
    'アメリカ私立',
  ],
  datasets: [
    {
      data: [50, 100, 50, 100, 250, 350],
      backgroundColor: [
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 1)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
        'rgba(30, 64, 175, 0.2)',
      ],
      borderColor: [
        'rgba(30, 64, 175, 1)',
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

export const TuitionBarChart: FC<Props> = (props: Props) => (
  <BarChart {...props} data={data} />
);
