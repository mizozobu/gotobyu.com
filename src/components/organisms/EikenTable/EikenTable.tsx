import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';

export interface Props {}

export const data = {
  byu: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: undefined,
  },
  byuh: {
    reading: 520,
    writing: 520,
    speaking: 520,
    listening: 520,
    total: undefined,
  },
  byui: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: undefined,
  },
};

export const EikenTable: FC<Props> = () => (
  <EnglishRequirementTable data={data} />
);
