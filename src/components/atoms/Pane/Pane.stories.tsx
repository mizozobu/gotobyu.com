import type { Meta, StoryObj } from '@storybook/react';
import { Pane } from './Pane';

const meta = {
  title: 'components/atoms/Pane',
  component: Pane,
  argTypes: {},
} satisfies Meta<typeof Pane>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: 'flex items-center bg-indigo-200',
    children: 'Content',
  },
};
