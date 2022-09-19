import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ENGLISH_REQUIREMENT_BY_EXAM } from '@/data/english-requirement';
import { EnglishRequirementByExamTable } from './EnglishRequirementByExamTable';

export default {
  title: 'features/compare/EnglishRequirementByExamTable',
  component: EnglishRequirementByExamTable,
  argTypes: {},
} as ComponentMeta<typeof EnglishRequirementByExamTable>;

const Template: ComponentStory<typeof EnglishRequirementByExamTable> = (
  args,
) => <EnglishRequirementByExamTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  exam: 'TOEFL',
  data: ENGLISH_REQUIREMENT_BY_EXAM.TOEFL,
};
