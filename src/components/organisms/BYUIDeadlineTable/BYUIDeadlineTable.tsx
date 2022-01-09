import { FC } from 'react';
import { DeadlineTable } from '@c/molecules/DeadlineTable';
import { BYUI_APPLICATION_DEADLINE } from '@d';

export interface Props {}

export const BYUIDeadlineTable: FC<Props> = () => (
  <DeadlineTable data={BYUI_APPLICATION_DEADLINE} />
);
