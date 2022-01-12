import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { CostTable as _CostTable } from '@cmp/organisms/CostTable';
import { forexState } from '@s/forex';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof _CostTable>, 'forex'> {}

export const CostTable = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_CostTable {...props} forex={forex} />;
};
