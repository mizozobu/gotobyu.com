import type { Meta, StoryObj } from '@storybook/react';
import { BgRotate } from './BgRotate';

const meta = {
  title: 'components/atoms/BgRotate',
  component: BgRotate,
  argTypes: {},
} satisfies Meta<typeof BgRotate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    className: 'w-48 h-48',
    children: <div className='h-48 w-48 rounded-md bg-white'>Content</div>,
    style: {
      '--bg': '#002e5d',
    },
  },
};
