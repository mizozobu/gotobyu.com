import type { Meta, StoryObj } from '@storybook/react';
import { P } from './P';

const meta = {
  title: 'components/atoms/P',
  component: P,
  argTypes: {},
} satisfies Meta<typeof P>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Paragraph',
  },
};
