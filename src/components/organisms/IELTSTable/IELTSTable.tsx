import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';

export interface Props {}

export const data = {
  byu: {
    reading: 6,
    writing: 6,
    speaking: 6.5,
    listening: 6,
    total: 6.5,
  },
  byuh: {
    reading: 5,
    writing: 5,
    speaking: 5,
    listening: 5,
    total: 5.5,
  },
  byui: {
    reading: 6,
    writing: 5,
    speaking: 5.5,
    listening: 6,
    total: 6,
  },
};

export const IELTSTable: FC<Props> = () => (
  <EnglishRequirementTable data={data} />
);
