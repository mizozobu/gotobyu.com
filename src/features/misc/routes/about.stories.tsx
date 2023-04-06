import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import About from './about.mdx';

const meta = {
  title: 'features/misc/About',
  component: About,
  argTypes: {},
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof About> = () => <About components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
