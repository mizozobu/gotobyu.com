import type { ComponentPropsWithoutRef } from 'react';
import { useRecoilValue } from 'recoil';
import { TuitionBarChart as _TuitionBarChart } from '@cmp/organisms/TuitionBarChart';
import { forexState } from '@s/forex';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof _TuitionBarChart>, 'rate'> {}

export const TuitionBarChart = (props: Props) => {
  const forex = useRecoilValue(forexState);

  return <_TuitionBarChart {...props} forex={forex} />;
};
