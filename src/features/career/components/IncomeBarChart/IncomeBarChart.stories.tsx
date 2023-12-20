import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { IncomeBarChart } from './IncomeBarChart.client';

const meta = {
  title: 'features/career/IncomeBarChart',
  component: IncomeBarChart,
  argTypes: {},
} satisfies Meta<typeof IncomeBarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof IncomeBarChart> = () => <IncomeBarChart />;

export const Example: Story = {
  render: Template,
  args: {},
};
