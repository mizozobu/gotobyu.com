'use client';

import type { Context } from 'chartjs-plugin-datalabels';
import { memo, useCallback, type ComponentPropsWithoutRef } from 'react';
import { DynamicPieChart } from '@/components/organisms/DynamicPieChart';
import { INTERNSHIP_SALARY } from '@/data/income';
import { round } from '@/utils/round';

/**
 * Props for {@link DynamicPieChart}
 */
type PieChartProps = ComponentPropsWithoutRef<typeof DynamicPieChart>;

/**
 * Props for {@link InternSalaryPieChart}
 */
interface Props
  extends Omit<PieChartProps, 'data' | 'title' | 'labelCallback'> {}

/**
 * Pie chart to show internship salary distribution
 */
export const InternSalaryPieChart = memo((props: Props): JSX.Element => {
  /**
   * Format label
   */
  const formatLabel = useCallback<
    Exclude<PieChartProps['labelCallback'], undefined>
  >(
    (value: number, context: Context) => [
      `${context.chart.data.labels?.[context.dataIndex] as string}`,
      `${round(value, 2).toLocaleString()}%`,
    ],
    [],
  );

  return (
    <>
      <DynamicPieChart
        {...props}
        title='インターンシップの給与(月)'
        data={{
          labels: [
            '0円',
            '0 ~ 10万円',
            '10 ~ 20万円',
            '20 ~ 30万円',
            '30万円以上',
          ],
          datasets: [
            {
              data: [
                INTERNSHIP_SALARY._0,
                INTERNSHIP_SALARY._0to10,
                INTERNSHIP_SALARY._10to20,
                INTERNSHIP_SALARY._20to30,
                INTERNSHIP_SALARY._30over,
              ],
              backgroundColor: [
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 0.4)',
                'rgba(55, 48, 163, 0.6)',
                'rgba(55, 48, 163, 0.8)',
                'rgba(55, 48, 163, 1)',
              ],
              borderWidth: 0,
            },
          ],
        }}
        labelCallback={formatLabel}
        enableDataLable
      />
      <span className='sr-only'>
        BYU、BYUH、BYUIの学生のインターンシップの給与(月)
      </span>
    </>
  );
});
