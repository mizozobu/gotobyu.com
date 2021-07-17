import { FC } from 'react';
import { PieChart, Props as PieChartProps } from '@c/molecules/PieChart';

export interface Props extends Omit<PieChartProps, 'data'> {}

const data = {
  labels: ['0円', '0 ~ 10万円', '10 ~ 20万円', '20 ~ 30万円', '30万円以上'],
  datasets: [
    {
      data: [22.7, 22.7, 13.6, 22.7, 18.2],
      backgroundColor: [
        'rgba(49, 46, 129, 0.2)',
        'rgba(49, 46, 129, 0.4)',
        'rgba(49, 46, 129, 0.6)',
        'rgba(49, 46, 129, 0.8)',
        'rgba(49, 46, 129, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

export const InternSalaryPieChart: FC<Props> = (props: Props) => (
  <PieChart {...props} data={data} />
);
