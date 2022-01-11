import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYUI_APPLICATION_DEADLINE } from '@d';

export interface Props {}

export const BYUIDeadlineTable = () => (
  <DeadlineTable data={BYUI_APPLICATION_DEADLINE} />
);
