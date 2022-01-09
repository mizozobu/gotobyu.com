import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import {
  CostTable as _CostTable,
  Props as CostTableProps,
} from '@cmp/organisms/CostTable';

export interface Props extends Omit<CostTableProps, 'forex'> {}

export const CostTable: FC<Props> = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_CostTable {...props} forex={forex} />;
};
