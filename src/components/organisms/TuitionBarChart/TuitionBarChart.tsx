import { memo, useState } from 'react';
import { Footnote } from '@cmp/atoms/Footnote';
import { SwitchControl } from '@cmp/molecules/SwitchControl';
import { DynamicBarChart } from '@cmp/organisms/DynamicBarChart';
import { TUITION } from '@d';
import { Forex } from '@l/forex';
import { MDX } from '@l/mdx';

interface Props {
  forex: Forex;
}

export const TuitionBarChart = memo(({ forex }: Props) => {
  const [isJPY, setIsJPY] = useState(true);
  const [isLDS, setIsLDS] = useState(true);
  const multiplier = isJPY ? forex.exrate : 1;
  const ldsRate = isLDS ? 1 : 2;

  return (
    <>
      <div className='flex flex-row space-x-4'>
        <SwitchControl
          checked={isJPY}
          onChange={setIsJPY}
          label='日本円'
          sr='Switch Currency'
        />
        <SwitchControl
          checked={isLDS}
          onChange={setIsLDS}
          label='教会員'
          sr='Switch Membership Status'
        />
      </div>

      <div className='h-96 lg:h-120'>
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
                  (TUITION.jpKokuritsu / forex.exrate) * multiplier,
                  (TUITION.jpShiritsu / forex.exrate) * multiplier,
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
      </div>

      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <MDX.ul className='mt-4 text-xs'>
        <Footnote>
          {new Date(forex.timestamp).toLocaleString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'Asia/Tokyo',
          })}
          時点での為替レート$1=&yen;{forex.exrate}で換算
        </Footnote>
      </MDX.ul>
    </>
  );
});
