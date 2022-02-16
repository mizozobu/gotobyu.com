import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { IELTS_REQUIREMENT } from '@d';

export const IELTSTable = () => (
  <EnglishRequirementTable exam='IELTS' data={IELTS_REQUIREMENT} />
);
