import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { ENGLISH_REQUIREMENT_BY_EXAM } from '@/data/english-requirement';
import { EnglishRequirementByExamTable } from './EnglishRequirementByExamTable';

export default {
  title: 'features/compare/EnglishRequirementByExamTable',
  component: EnglishRequirementByExamTable,
  argTypes: {},
} as Meta<typeof EnglishRequirementByExamTable>;

const Template: StoryFn<typeof EnglishRequirementByExamTable> = (args) => (
  <EnglishRequirementByExamTable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  exam: 'TOEFL',
  data: ENGLISH_REQUIREMENT_BY_EXAM.TOEFL,
};
