import type { Meta, StoryObj } from '@storybook/react';
import { ENGLISH_REQUIREMENT_BY_SCHOOL } from '@/data/english-requirement';
import { EnglishRequirementBySchoolTable } from './EnglishRequirementBySchoolTable';

const meta = {
  title: 'features/apply/EnglishRequirementBySchoolTable',
  component: EnglishRequirementBySchoolTable,
  argTypes: {},
} satisfies Meta<typeof EnglishRequirementBySchoolTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    school: 'BYU',
    data: ENGLISH_REQUIREMENT_BY_SCHOOL.byu,
  },
};
