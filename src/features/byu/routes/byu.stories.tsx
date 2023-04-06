import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MDX } from '@/features/mdx';
import Byu from './byu.mdx';

const meta = {
  title: 'features/byu/Byu',
  component: Byu,
  argTypes: {},
} satisfies Meta<typeof Byu>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Byu> = () => <Byu components={MDX} />;

export const Example: Story = {
  render: Template,
  args: {},
};
