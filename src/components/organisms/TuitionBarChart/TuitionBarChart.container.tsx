import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import {
  TuitionBarChart,
  Props as TuitionBarChartProps,
} from './TuitionBarChart';

export interface Props extends Omit<TuitionBarChartProps, 'rate'> {}

const TuitionBarChartContainer: FC<Props> = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <TuitionBarChart {...props} forex={forex} />;
};

export default TuitionBarChartContainer;
