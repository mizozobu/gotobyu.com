import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYUI_APPLICATION_DEADLINE } from '@d/application-deadline';

export const BYUIDeadlineTable = () => (
  <DeadlineTable school='BYUI' data={BYUI_APPLICATION_DEADLINE} />
);
