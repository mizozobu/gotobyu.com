import type { Meta, StoryObj } from '@storybook/react';
import { Ul } from './Ul';

const meta = {
  title: 'components/atoms/Ul',
  component: Ul,
  argTypes: {},
} satisfies Meta<typeof Ul>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </>
    ),
  },
};
