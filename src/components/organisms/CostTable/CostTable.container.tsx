import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { globalState } from '@s/global';
import { CostTable, Props as CostTableProps } from './CostTable';

export interface Props extends Omit<CostTableProps, 'rate'> {}

const CostTableContainer: FC<Props> = (props: Props) => {
  const { forex: rate } = useRecoilValue(globalState);

  return <CostTable {...props} rate={rate} />;
};

export default CostTableContainer;
