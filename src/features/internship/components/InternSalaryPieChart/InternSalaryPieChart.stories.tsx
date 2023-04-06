import type { Meta, StoryObj } from '@storybook/react';
import { InternSalaryPieChart } from './InternSalaryPieChart';

const meta = {
  title: 'features/internship/InternSalaryPieChart',
  component: InternSalaryPieChart,
  argTypes: {},
} satisfies Meta<typeof InternSalaryPieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
