import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';
import { IELTSData } from '@d';

export interface Props {}

export const IELTSTable: FC<Props> = () => (
  <EnglishRequirementTable data={IELTSData} />
);
