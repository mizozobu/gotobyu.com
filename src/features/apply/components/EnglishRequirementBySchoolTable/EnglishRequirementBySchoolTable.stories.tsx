import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { ENGLISH_REQUIREMENT_BY_SCHOOL } from '@/data/english-requirement';
import { EnglishRequirementBySchoolTable } from './EnglishRequirementBySchoolTable';

export default {
  title: 'features/apply/EnglishRequirementBySchoolTable',
  component: EnglishRequirementBySchoolTable,
  argTypes: {},
} as Meta<typeof EnglishRequirementBySchoolTable>;

const Template: StoryFn<typeof EnglishRequirementBySchoolTable> = (args) => (
  <EnglishRequirementBySchoolTable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  school: 'BYU',
  data: ENGLISH_REQUIREMENT_BY_SCHOOL.byu,
};
