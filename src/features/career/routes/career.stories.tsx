import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Career from './career.mdx';

const meta = {
  title: 'features/career/Career',
  component: Career,
  argTypes: {},
} satisfies Meta<typeof Career>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Career> = () => <Career components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
