import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { CostTable } from './CostTable';

const meta = {
  title: 'features/compare/CostTable',
  component: CostTable,
  argTypes: {},
} satisfies Meta<typeof CostTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CostTable> = () => <CostTable />;

export const Example: Story = {
  render: Template,
  args: {
    exrate: 110,
    isJPY: true,
    isLDS: true,
  },
};
