import { memo } from 'react';
import { DynamicBarChart } from '@cmp/organisms/DynamicBarChart';
import { TUITION } from '@d/cost-of-attendance';

interface Props {
  exrate: number;
  isJPY: boolean;
  isLDS: boolean;
}

export const TuitionBarChart = memo(({ exrate, isJPY, isLDS }: Props) => {
  const multiplier = isJPY ? exrate : 1;
  const ldsRate = isLDS ? 1 : 2;

  return (
    <>
      <DynamicBarChart
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
        yAxesTicksCallback={(value) =>
          `${isJPY ? '¥' : '$'}${value.toLocaleString()}`
        }
      />
      <span className='sr-only'>
        BYU、BYUH、BYUI、日本国立、日本私立、US国立、US私立における年間学費の比較
      </span>
    </>
  );
});
