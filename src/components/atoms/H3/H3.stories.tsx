import type { Meta, StoryObj } from '@storybook/react';
import { H3 } from './H3';

const meta = {
  title: 'components/atoms/H3',
  component: H3,
  argTypes: {},
} satisfies Meta<typeof H3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Heading',
  },
};
