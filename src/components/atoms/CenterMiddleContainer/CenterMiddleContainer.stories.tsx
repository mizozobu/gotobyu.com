import type { Meta, StoryObj } from '@storybook/react';
import { CenterMiddleContainer } from './CenterMiddleContainer';

const meta = {
  title: 'components/atoms/CenterMiddleContainer',
  component: CenterMiddleContainer,
  argTypes: {},
} satisfies Meta<typeof CenterMiddleContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Content',
  },
};
