import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { SwitchControl } from '@c/molecules/SwitchControl';
import { statsState } from '@s/stats';

/**
 * Toggle switch for LDS status
 */
export const LDSSwitchControl = (): JSX.Element => {
  const [{ isLDS }, setStatsState] = useRecoilState(statsState);

  const handleChange: ComponentPropsWithoutRef<
    typeof SwitchControl
  >['onChange'] = (checked) => {
    setStatsState((prevState) => ({
      ...prevState,
      isLDS: checked,
    }));
  };

  return (
    <SwitchControl
      checked={isLDS}
      onChange={handleChange}
      label='教会員'
      sr='教会員かどうか'
    />
  );
};
