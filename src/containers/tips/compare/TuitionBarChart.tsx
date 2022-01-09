import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { forexState } from '@s/forex';
import {
  TuitionBarChart as _TuitionBarChart,
  Props as TuitionBarChartProps,
} from '@c/organisms/TuitionBarChart';

export interface Props extends Omit<TuitionBarChartProps, 'rate'> {}

export const TuitionBarChart: FC<Props> = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_TuitionBarChart {...props} forex={forex} />;
};
