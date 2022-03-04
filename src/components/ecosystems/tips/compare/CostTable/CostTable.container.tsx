import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CostTable as _CostTable } from '@cmp/organisms/CostTable';
import { forexState } from '@s/forex';
import { statsState, CURRENCY } from '@s/stats';

interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _CostTable>,
    'exrate' | 'isJPY' | 'isLDS'
  > {}

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
