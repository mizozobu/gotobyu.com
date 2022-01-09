import { FC } from 'react';
import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYU_APPLICATION_DEADLINE } from '@d';

export interface Props {}

export const BYUDeadlineTable: FC<Props> = () => (
  <DeadlineTable data={BYU_APPLICATION_DEADLINE} />
);
