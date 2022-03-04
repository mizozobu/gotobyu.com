import { memo, useCallback, ComponentPropsWithoutRef } from 'react';
import { DynamicBarChart } from '@cmp/dynamics/DynamicBarChart';
import { TUITION } from '@d/cost-of-attendance';
import { round } from '@l/round';

type BarChartProps = ComponentPropsWithoutRef<typeof DynamicBarChart>;

interface Props
  extends Omit<
    BarChartProps,
    'data' | 'title' | 'yAxesTicksCallback' | 'labelCallback'
  > {
  exrate: number;
  isJPY: boolean;
  isLDS: boolean;
}

export const TuitionBarChart = memo(
  ({ exrate, isJPY, isLDS, ...props }: Props) => {
    const multiplier = isJPY ? exrate : 1;
    const ldsRate = isLDS ? 1 : 2;

    const formatLabel:
      | BarChartProps['labelCallback'] & BarChartProps['yAxesTicksCallback'] =
      useCallback(
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
        />
        <span className='sr-only'>
          BYU、BYUH、BYUI、日本国立、日本私立、US国立、US私立における年間学費の比較
        </span>
      </>
    );
  },
);
