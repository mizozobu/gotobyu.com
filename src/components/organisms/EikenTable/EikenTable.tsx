import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';
import { EIKENData } from '@d';

export interface Props {}

export const EikenTable: FC<Props> = () => (
  <EnglishRequirementTable data={EIKENData} />
);
