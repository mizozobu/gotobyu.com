import type { Meta, StoryObj } from '@storybook/react';
import { H2 } from './H2';

const meta = {
  title: 'components/atoms/H2',
  component: H2,
  argTypes: {},
} satisfies Meta<typeof H2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Heading',
  },
};
