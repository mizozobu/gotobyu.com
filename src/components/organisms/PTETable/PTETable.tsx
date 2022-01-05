import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';
import { PTEdata } from '@d';

export interface Props {}

export const PTETable: FC<Props> = () => (
  <EnglishRequirementTable data={PTEdata} />
);
