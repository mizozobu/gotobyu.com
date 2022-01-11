import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { IELTS_REQUIREMENT } from '@d';

export interface Props {}

export const IELTSTable = () => (
  <EnglishRequirementTable data={IELTS_REQUIREMENT} />
);
