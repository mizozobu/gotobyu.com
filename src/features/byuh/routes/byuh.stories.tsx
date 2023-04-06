import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Byuh from './byuh.mdx';

const meta = {
  title: 'features/byuh/Byuh',
  component: Byuh,
  argTypes: {},
} satisfies Meta<typeof Byuh>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Byuh> = () => <Byuh components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
