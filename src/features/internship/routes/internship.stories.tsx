import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Internship from './internship.mdx';

const meta = {
  title: 'features/internship/Internship',
  component: Internship,
  argTypes: {},
} satisfies Meta<typeof Internship>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Internship> = () => (
  <Internship components={MDX} />
);

export const Example: Story = {
  render: Template,
  args: {},
};
