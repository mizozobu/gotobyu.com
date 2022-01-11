import { useRecoilValue } from 'recoil';
import {
  CostTable as _CostTable,
  Props as CostTableProps,
} from '@cmp/organisms/CostTable';
import { forexState } from '@s/forex';

export interface Props extends Omit<CostTableProps, 'forex'> {}

export const CostTable = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_CostTable {...props} forex={forex} />;
};
