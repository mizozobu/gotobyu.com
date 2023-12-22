'use client';

import { SwitchControl } from '@/components/molecules/SwitchControl';
import { useLds } from '../../hooks/useLds';

/**
 * Toggle switch for LDS status
 */
export const LDSSwitchControl = (): JSX.Element => {
  const { isLds, changeLds } = useLds();

  return (
    <SwitchControl
      checked={isLds}
      onChange={changeLds}
      label='教会員'
      sr='教会員かどうか'
    />
  );
};
