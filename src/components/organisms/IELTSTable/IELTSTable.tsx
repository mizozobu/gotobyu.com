import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { IELTS_REQUIREMENT } from '@d/english-requirement';

export const IELTSTable = () => (
  <EnglishRequirementTable exam='IELTS' data={IELTS_REQUIREMENT} />
);
