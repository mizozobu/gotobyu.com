import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import { statsState, CURRENCY } from '@s/stats';
import { CostTable as _CostTable } from './CostTable';

/**
 * Props for CostTable container
 */
interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _CostTable>,
    'exrate' | 'isJPY' | 'isLDS'
  > {}

/**
 * Container component for CostTable in /tips/compare
 */
export const CostTable = (props: Props) => {
  const { exrate } = useRecoilValue(forexState);
  const { currency, isLDS } = useRecoilValue(statsState);

  return (
    <_CostTable
      {...props}
      exrate={exrate}
      isJPY={currency === CURRENCY.JPY}
      isLDS={isLDS}
    />
  );
};
