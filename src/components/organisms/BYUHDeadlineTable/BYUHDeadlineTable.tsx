import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYUH_APPLICATION_DEADLINE } from '@d/application-deadline';

export const BYUHDeadlineTable = () => (
  <DeadlineTable school='BYUH' data={BYUH_APPLICATION_DEADLINE} />
);
