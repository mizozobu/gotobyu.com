import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { PTE_REQUIREMENT } from '@d/english-requirement';

export const PTETable = () => (
  <EnglishRequirementTable exam='PTE' data={PTE_REQUIREMENT} />
);
