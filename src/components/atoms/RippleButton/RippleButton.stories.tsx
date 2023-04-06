import type { Meta, StoryObj } from '@storybook/react';
import { RippleButton } from './RippleButton';

const meta = {
  title: 'components/atoms/RippleButton',
  component: RippleButton,
  argTypes: {},
} satisfies Meta<typeof RippleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Button',
    className: 'text-white rounded-md px-4 py-2',
    style: {
      '--bg-color': 'rgb(49 46 129)',
      '--ripple-color': 'rgb(165 180 252)',
    },
  },
};
