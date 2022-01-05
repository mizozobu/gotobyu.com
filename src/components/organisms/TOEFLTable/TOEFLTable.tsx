import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';
import { TOEFLData } from '@d';

export interface Props {}

export const TOEFLTable: FC<Props> = () => (
  <EnglishRequirementTable data={TOEFLData} />
);
