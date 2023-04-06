import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Byui from './byui.mdx';

const meta = {
  title: 'features/byui/Byui',
  component: Byui,
  argTypes: {},
} satisfies Meta<typeof Byui>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Byui> = () => <Byui components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
