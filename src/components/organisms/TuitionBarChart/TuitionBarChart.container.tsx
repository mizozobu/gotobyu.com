import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { globalState } from '@s/global';
import {
  TuitionBarChart,
  Props as TuitionBarChartProps,
} from './TuitionBarChart';

export interface Props extends Omit<TuitionBarChartProps, 'rate'> {}

const TuitionBarChartContainer: FC<Props> = (props: Props) => {
  const { forex: rate } = useRecoilValue(globalState);

  return <TuitionBarChart {...props} rate={rate} />;
};

export default TuitionBarChartContainer;
