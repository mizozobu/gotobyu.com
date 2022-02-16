import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { PTE_REQUIREMENT } from '@d';

export const PTETable = () => (
  <EnglishRequirementTable exam='PTE' data={PTE_REQUIREMENT} />
);
