import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { SwitchControl } from '@cmp/molecules/SwitchControl';
import { statsState, CURRENCY } from '@s/stats';

export const CurrencySwitchControl = () => {
  const [{ currency }, setStatsState] = useRecoilState(statsState);

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
