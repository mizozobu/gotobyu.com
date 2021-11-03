import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import { CostTable, Props as CostTableProps } from './CostTable';

export interface Props extends Omit<CostTableProps, 'forex'> {}

const CostTableContainer: FC<Props> = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <CostTable {...props} forex={forex} />;
};

export default CostTableContainer;
