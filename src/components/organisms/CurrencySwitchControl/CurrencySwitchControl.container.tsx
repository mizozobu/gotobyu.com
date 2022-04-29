import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { SwitchControl } from '@c/molecules/SwitchControl';
import { statsState, CURRENCY } from '@s/stats';

/**
 * Toggle switch for currency
 */
export const CurrencySwitchControl = (): JSX.Element => {
  const [{ currency }, setStatsState] = useRecoilState(statsState);

  /**
   * Change event handler
   */
  const handleChange: ComponentPropsWithoutRef<
    typeof SwitchControl
  >['onChange'] = (checked) => {
    setStatsState((prevState) => ({
      ...prevState,
      currency: checked ? CURRENCY.JPY : CURRENCY.USD,
    }));
  };

  return (
    <SwitchControl
      checked={currency === CURRENCY.JPY}
      onChange={handleChange}
      label='日本円'
      sr='通貨単位'
    />
  );
};
