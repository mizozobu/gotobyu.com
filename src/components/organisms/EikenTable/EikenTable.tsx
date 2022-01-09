import { FC } from 'react';
import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { EIKEN_REQUIREMENT } from '@d';

export interface Props {}

export const EikenTable: FC<Props> = () => (
  <EnglishRequirementTable data={EIKEN_REQUIREMENT} />
);
