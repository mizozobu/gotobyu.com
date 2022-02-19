import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYU_APPLICATION_DEADLINE } from '@d/application-deadline';

export const BYUDeadlineTable = () => (
  <DeadlineTable school='BYU' data={BYU_APPLICATION_DEADLINE} />
);
