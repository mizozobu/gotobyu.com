import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';

export interface Props {}

export const data = {
  byu: {
    reading: 49,
    writing: 49,
    speaking: 49,
    listening: 49,
    total: 53,
  },
  byuh: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: 44,
  },
  byui: {
    reading: 47,
    writing: 47,
    speaking: 45,
    listening: 45,
    total: 46,
  },
};

export const PTETable: FC<Props> = () => (
  <EnglishRequirementTable data={data} />
);
