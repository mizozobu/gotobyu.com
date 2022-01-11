import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { EIKEN_REQUIREMENT } from '@d';

export interface Props {}

export const EikenTable = () => (
  <EnglishRequirementTable data={EIKEN_REQUIREMENT} />
);
