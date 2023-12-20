import type { Meta, StoryObj } from '@storybook/react';
import { Type } from './Type.client';

const meta = {
  title: 'components/atoms/Type',
  component: Type,
  argTypes: {},
} satisfies Meta<typeof Type>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    style: {
      '--caret-width': '3px',
    },
    typeSpeed: 50,
    waitBeforeType: 2000,
    waitAfterType: 2000,
  },
};
