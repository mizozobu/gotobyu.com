import { memo } from 'react';
import { DynamicBarChart } from '@cmp/organisms/DynamicBarChart';

export const IncomeBarChart = memo(() => (
  <>
    <DynamicBarChart
      title='大卒1年目の年収'
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
      yAxesTicksCallback={(value) => `${value.toLocaleString()}万円`}
    />
    <span className='sr-only'>
      一般的な大卒とBYU、BYUH、BYUI卒業生の大卒1年目の年収の比較
    </span>
  </>
));
