import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Compare from './compare.mdx';

const meta = {
  title: 'features/compare/Compare',
  component: Compare,
  argTypes: {},
} satisfies Meta<typeof Compare>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Compare> = () => <Compare components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
