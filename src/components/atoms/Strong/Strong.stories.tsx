import type { Meta, StoryObj } from '@storybook/react';
import { Strong } from './Strong';

const meta = {
  title: 'components/atoms/Strong',
  component: Strong,
  argTypes: {},
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleLine: Story = {
  args: {
    children: 'Strong',
  },
};

export const MultiLine: Story = {
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur in, velit, quisquam est sequi obcaecati quaerat, quis sapiente earum quo accusamus? Non placeat dolores dolorem est ex nesciunt laborum.'.repeat(
        3,
      ),
  },
};
