import { memo, useCallback, type ComponentPropsWithoutRef } from 'react';
import { DynamicBarChart } from '@c/organisms/DynamicBarChart';
import { FIRST_YEAR_INCOME } from '@d/income';
import { round } from '@l/round';

/**
 * Props for {@link DynamicBarChart}
 */
type BarChartProps = ComponentPropsWithoutRef<typeof DynamicBarChart>;

/**
 * Props for {@link IncomeBarChart}
 */
interface Props
  extends Omit<
    BarChartProps,
    'data' | 'title' | 'yAxesTicksCallback' | 'labelCallback'
  > {}

/**
 * Bar chart to compare the 1st year income of BYUs grads and normal grads
 */
export const IncomeBarChart = memo((props: Props): JSX.Element => {
  const formatLabel:
    | BarChartProps['labelCallback'] & BarChartProps['yAxesTicksCallback'] =
    useCallback((value) => `${round(+value).toLocaleString()}万円`, []);

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
