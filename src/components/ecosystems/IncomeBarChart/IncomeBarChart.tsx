import { memo, useCallback, ComponentPropsWithoutRef } from 'react';
import { DynamicBarChart } from '@cmp/dynamics/DynamicBarChart';
import { FIRST_YEAR_INCOME } from '@d/income';

type BarChartProps = ComponentPropsWithoutRef<typeof DynamicBarChart>;

interface Props
  extends Omit<
    BarChartProps,
    'data' | 'title' | 'yAxesTicksCallback' | 'labelCallback'
  > {}

export const IncomeBarChart = memo((props: Props) => {
  const formatLabel:
    | BarChartProps['labelCallback'] & BarChartProps['yAxesTicksCallback'] =
    useCallback(
      (value: string | number) => `${value.toLocaleString()}万円`,
      [],
    );

  return (
    <>
      <DynamicBarChart
        {...props}
        title='大卒1年目の年収'
        data={{
          labels: ['大卒平均', 'BYUs卒平均'],
          datasets: [
            {
              data: [FIRST_YEAR_INCOME.average, FIRST_YEAR_INCOME.byusAverage],
              backgroundColor: [
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 1)',
              ],
              borderColor: ['rgba(55, 48, 163, 1)', 'rgba(55, 48, 163, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        yAxesTicksCallback={formatLabel}
        labelCallback={formatLabel}
      />
      <span className='sr-only'>
        一般的な大卒とBYU、BYUH、BYUI卒業生の大卒1年目の年収の比較
      </span>
    </>
  );
});
