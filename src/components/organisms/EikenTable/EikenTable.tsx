import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { EIKEN_REQUIREMENT } from '@d/english-requirement';

export const EikenTable = () => (
  <EnglishRequirementTable exam='英検' data={EIKEN_REQUIREMENT} />
);
