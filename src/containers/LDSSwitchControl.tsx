import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { SwitchControl } from '@cmp/molecules/SwitchControl';
import { statsState } from '@s/stats';

export const LDSSwitchControl = () => {
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
