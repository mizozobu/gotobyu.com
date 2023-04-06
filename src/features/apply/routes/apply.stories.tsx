import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Apply from './apply.mdx';

const meta = {
  title: 'features/apply/Apply',
  component: Apply,
  argTypes: {},
} satisfies Meta<typeof Apply>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Apply> = () => <Apply components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
