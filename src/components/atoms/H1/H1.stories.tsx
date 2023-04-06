import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from './H1';

const meta = {
  title: 'components/atoms/H1',
  component: H1,
  argTypes: {},
} satisfies Meta<typeof H1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Heading',
  },
};
