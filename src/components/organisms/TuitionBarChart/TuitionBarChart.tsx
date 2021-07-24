import { FC } from 'react';
import { BarChart, Props as BarChartProps } from '@c/molecules/BarChart';

export interface Props extends Omit<BarChartProps, 'data' | 'title'> {}

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
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 0.2)',
        'rgba(55, 48, 163, 0.2)',
        'rgba(55, 48, 163, 0.2)',
        'rgba(55, 48, 163, 0.2)',
      ],
      borderColor: [
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
        'rgba(55, 48, 163, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const TuitionBarChart: FC<Props> = (props: Props) => (
  <BarChart {...props} title='年間学費' data={data} />
);
