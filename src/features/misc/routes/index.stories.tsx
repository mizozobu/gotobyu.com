import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Index } from './index';

const meta = {
  title: 'features/misc/Index',
  component: Index,
  argTypes: {},
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Index> = () => <Index />;

export const Example: Story = {
  render: Template,
  args: {},
};
