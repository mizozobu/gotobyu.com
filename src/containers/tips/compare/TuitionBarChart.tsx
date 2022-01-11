import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  TuitionBarChart as _TuitionBarChart,
  Props as TuitionBarChartProps,
} from '@cmp/organisms/TuitionBarChart';
import { forexState } from '@s/forex';

export interface Props extends Omit<TuitionBarChartProps, 'rate'> {}

export const TuitionBarChart: FC<Props> = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_TuitionBarChart {...props} forex={forex} />;
};
