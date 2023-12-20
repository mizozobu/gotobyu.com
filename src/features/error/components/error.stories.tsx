import type { Meta, StoryObj } from '@storybook/react';
import { Error } from './error';

const meta = {
  title: 'features/misc/Error',
  component: Error,
  argTypes: {},
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    message: 'Error',
  },
};
