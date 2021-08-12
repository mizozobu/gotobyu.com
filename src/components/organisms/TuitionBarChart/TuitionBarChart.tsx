import { memo, useState, FC } from 'react';
import {
  BarChart,
  Props as BarChartProps,
  defaultOptions,
} from '@c/molecules/BarChart';
import { SwitchControl } from '@c/molecules/SwitchControl';
import { TuitionData } from '@d';

export interface Props extends Omit<BarChartProps, 'data' | 'title'> {
  rate: number;
}

const data = {
  labels: ['BYU', 'BYUH', 'BYUI', '日本国立', '日本私立', 'US国立', 'US私立'],
  datasets: [
    {
      data: [
        TuitionData.byu,
        TuitionData.byuh,
        TuitionData.byui,
        TuitionData.jpKokuritsu,
        TuitionData.jpShiritsu,
        TuitionData.usPublic,
        TuitionData.usPrivate,
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
};

export const TuitionBarChart: FC<Props> = memo(({ rate, ...props }: Props) => {
  const [isJPY, setIsJPY] = useState(true);
  const [isLDS, setIsLDS] = useState(true);
  const forex = isJPY ? rate : 1;
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

      <BarChart
        {...props}
        title={`年間学費(${isJPY ? '円' : 'ドル'})`}
        data={{
          ...data,
          datasets: [
            {
              ...data.datasets[0],
              data: [
                TuitionData.byu * forex * ldsRate,
                TuitionData.byuh * forex * ldsRate,
                TuitionData.byui * forex * ldsRate,
                TuitionData.jpKokuritsu * forex,
                TuitionData.jpShiritsu * forex,
                TuitionData.usPublic * forex,
                TuitionData.usPrivate * forex,
              ],
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
                  `${isJPY ? '¥' : '$'}${value.toLocaleString()}`,
              },
            },
          },
        }}
      />
    </>
  );
});
