import { memo, useCallback, type ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { DynamicBarChart } from '@/components/organisms/DynamicBarChart';
import { TUITION } from '@/data/cost-of-attendance';
import { forexState } from '@/features/forex';
import { statsState, CURRENCY } from '@/features/stats';
import { useMediaMinWidth } from '@/hooks/useMediaMinWidth';
import { round } from '@/utils/round';

/**
 * Props for {@link DynamicBarChart}
 */
type BarChartProps = ComponentPropsWithoutRef<typeof DynamicBarChart>;

/**
 * Props for {@link TuitionBarChart}
 */
interface Props
  extends Omit<
    BarChartProps,
    'data' | 'title' | 'yAxesTicksCallback' | 'labelCallback'
  > {}

/**
 * Bar chart to compare the tuituion of each school
 */
export const TuitionBarChart = memo((props: Props): JSX.Element => {
  const { exrate } = useRecoilValue(forexState);
  const { currency, isLDS } = useRecoilValue(statsState);
  const isJPY = currency === CURRENCY.JPY;
  const isGteMd = useMediaMinWidth('md');
  const multiplier = isJPY ? exrate : 1;
  const ldsRate = isLDS ? 1 : 2;

  /**
   * Format label and y axes
   */
  const formatLabel = useCallback<
    Exclude<
      BarChartProps['labelCallback'] & BarChartProps['yAxesTicksCallback'],
      undefined
    >
  >(
    (value) => `${isJPY ? '¥' : '$'}${round(+value).toLocaleString()}`,
    [isJPY],
  );

  return (
    <>
      <DynamicBarChart
        {...props}
        title={`年間学費(${isJPY ? '円' : 'ドル'})`}
        data={{
          labels: [
            'BYU',
            'BYUH',
            'BYUI',
            '日本国立',
            '日本私立',
            'US国立',
            'US私立',
          ],
          datasets: [
            {
              data: [
                TUITION.byu * multiplier * ldsRate,
                TUITION.byuh * multiplier * ldsRate,
                TUITION.byui * multiplier * ldsRate,
                (TUITION.jpKokuritsu / exrate) * multiplier,
                (TUITION.jpShiritsu / exrate) * multiplier,
                TUITION.usPublic * multiplier,
                TUITION.usPrivate * multiplier,
              ],
              backgroundColor: [
                'rgba(0, 46, 93, 1)',
                'rgba(158, 27, 52, 1)',
                'rgba(0, 118, 182, 1)',
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 0.2)',
                'rgba(55, 48, 163, 0.2)',
              ],
              borderColor: [
                'rgba(0, 46, 93, 1)',
                'rgba(158, 27, 52, 1)',
                'rgba(0, 118, 182, 1)',
                'rgba(55, 48, 163, 1)',
                'rgba(55, 48, 163, 1)',
                'rgba(55, 48, 163, 1)',
                'rgba(55, 48, 163, 1)',
                'rgba(55, 48, 163, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        yAxesTicksCallback={formatLabel}
        labelCallback={formatLabel}
        enableDataLable={isGteMd}
        enableTooltip={!isGteMd}
      />
      <span className='sr-only'>
        BYU、BYUH、BYUI、日本国立、日本私立、US国立、US私立における年間学費の比較
      </span>
    </>
  );
});
