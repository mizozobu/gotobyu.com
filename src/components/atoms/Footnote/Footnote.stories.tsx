import type { Meta, StoryObj } from '@storybook/react';
import { Footnote } from './Footnote';

const meta = {
  title: 'components/atoms/Footnote',
  component: Footnote,
  argTypes: {},
} satisfies Meta<typeof Footnote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'item',
  },
};
