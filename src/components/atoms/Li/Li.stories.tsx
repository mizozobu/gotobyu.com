import type { Meta, StoryObj } from '@storybook/react';
import { Li } from './Li';

const meta = {
  title: 'components/atoms/Li',
  component: Li,
  argTypes: {},
} satisfies Meta<typeof Li>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'item',
  },
};
