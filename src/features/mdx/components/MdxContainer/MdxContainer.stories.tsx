import type { Meta, StoryObj } from '@storybook/react';
import { MdxContainer } from './MdxContainer';

const meta = {
  title: 'features/mdx/MdxContainer',
  component: MdxContainer,
  argTypes: {},
} satisfies Meta<typeof MdxContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Content',
  },
};
