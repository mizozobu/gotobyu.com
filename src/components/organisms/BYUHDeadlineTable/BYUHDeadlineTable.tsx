import { FC } from 'react';
import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYUH_APPLICATION_DEADLINE } from '@d';

export interface Props {}

export const BYUHDeadlineTable: FC<Props> = () => (
  <DeadlineTable data={BYUH_APPLICATION_DEADLINE} />
);
