import { memo, FC } from 'react';
import {
  BarChart,
  Props as BarChartProps,
  defaultOptions,
} from '@c/molecules/BarChart';

export interface Props extends Omit<BarChartProps, 'data' | 'title'> {}

export const IncomeBarChart: FC<Props> = memo((props: Props) => (
  <BarChart
    {...props}
    title='新卒1年目の年収'
    data={{
      labels: ['大卒平均', 'BYUs卒平均'],
      datasets: [
        {
          data: [22.6 * 12 + 48.21, 523],
          backgroundColor: ['rgba(55, 48, 163, 0.2)', 'rgba(55, 48, 163, 1)'],
          borderColor: ['rgba(55, 48, 163, 1)', 'rgba(55, 48, 163, 1)'],
          borderWidth: 1,
        },
      ],
    }}
    options={{
      ...defaultOptions,
      scales: {
        ...defaultOptions.scales,
        yAxes: {
          ticks: {
            callback: (value: number | string) =>
              `${value.toLocaleString()}万円`,
          },
        },
      },
    }}
  />
));
