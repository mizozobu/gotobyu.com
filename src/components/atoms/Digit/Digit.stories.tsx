import type { Meta, StoryObj } from '@storybook/react';
import { Digit } from './Digit';

const meta = {
  title: 'components/atoms/Digit',
  component: Digit,
  argTypes: {},
} satisfies Meta<typeof Digit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoComma: Story = {
  args: {
    children: 123,
  },
};

export const Comma: Story = {
  args: {
    children: 1234,
  },
};

export const RoundUp: Story = {
  args: {
    children: 999.5,
  },
};

export const RoundDown: Story = {
  args: {
    children: 1000.4,
  },
};

export const RoundTo2DecimalPlaces: Story = {
  args: {
    children: 1000.1234,
    decimals: 2,
  },
};
