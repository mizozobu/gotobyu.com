import type { Meta, StoryObj } from '@storybook/react';
import { ENGLISH_REQUIREMENT_BY_EXAM } from '@/data/english-requirement';
import { EnglishRequirementByExamTable } from './EnglishRequirementByExamTable';

const meta = {
  title: 'features/compare/EnglishRequirementByExamTable',
  component: EnglishRequirementByExamTable,
  argTypes: {},
} satisfies Meta<typeof EnglishRequirementByExamTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    exam: 'TOEFL',
    data: ENGLISH_REQUIREMENT_BY_EXAM.TOEFL,
  },
};
