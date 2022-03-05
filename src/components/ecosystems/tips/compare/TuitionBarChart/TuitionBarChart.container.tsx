import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import { statsState, CURRENCY } from '@s/stats';
import { TuitionBarChart as _TuitionBarChart } from './TuitionBarChart';

/**
 * Props for TuitionBarChart container
 */
interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _TuitionBarChart>,
    'exrate' | 'isJPY' | 'isLDS'
  > {}

/**
 * Container component for TuitionBarChart in /tips/compare
 */
export const TuitionBarChart = (props: Props) => {
  const { exrate } = useRecoilValue(forexState);
  const { currency, isLDS } = useRecoilValue(statsState);

  return (
    <_TuitionBarChart
      {...props}
      exrate={exrate}
      isJPY={currency === CURRENCY.JPY}
      isLDS={isLDS}
    />
  );
};
