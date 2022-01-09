import { FC } from 'react';
import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { IELTS_REQUIREMENT } from '@d';

export interface Props {}

export const IELTSTable: FC<Props> = () => (
  <EnglishRequirementTable data={IELTS_REQUIREMENT} />
);
