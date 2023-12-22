'use client';

import { SwitchControl } from '@/components/molecules/SwitchControl';
import { useCurrency } from '../../hooks/useCurrency';
/**
 * Toggle switch for currency
 */
export const CurrencySwitchControl = (): JSX.Element => {
  const { isJPY, changeCurrency } = useCurrency();

  return (
    <SwitchControl
      checked={isJPY}
      onChange={changeCurrency}
      label='日本円'
      sr='通貨単位'
    />
  );
};
