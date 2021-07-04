import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';

export interface Props {}

export const data = {
  byu: {
    reading: 20,
    writing: 20,
    speaking: 20,
    listening: 20,
    total: 80,
  },
  byuh: {
    reading: undefined,
    writing: 17,
    speaking: 17,
    listening: undefined,
    total: 61,
  },
  byui: {
    reading: 17,
    writing: 17,
    speaking: 16,
    listening: 16,
    total: 66,
  },
};

export const TOEFLTable: FC<Props> = () => (
  <EnglishRequirementTable data={data} />
);
