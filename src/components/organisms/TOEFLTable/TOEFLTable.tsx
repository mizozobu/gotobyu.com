import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { TOEFL_REQUIREMENT } from '@d/english-requirement';

export const TOEFLTable = () => (
  <EnglishRequirementTable exam='TOEFL' data={TOEFL_REQUIREMENT} />
);
