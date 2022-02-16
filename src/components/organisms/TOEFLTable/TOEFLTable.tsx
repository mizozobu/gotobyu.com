import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { TOEFL_REQUIREMENT } from '@d';

export const TOEFLTable = () => (
  <EnglishRequirementTable exam='TOEFL' data={TOEFL_REQUIREMENT} />
);
