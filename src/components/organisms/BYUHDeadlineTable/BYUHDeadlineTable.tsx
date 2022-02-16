import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYUH_APPLICATION_DEADLINE } from '@d';

export const BYUHDeadlineTable = () => (
  <DeadlineTable school='BYUH' data={BYUH_APPLICATION_DEADLINE} />
);
