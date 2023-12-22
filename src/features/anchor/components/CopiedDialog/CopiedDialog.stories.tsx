import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { CopiedDialog } from './CopiedDialog.client';

const meta = {
  title: 'features/anchor/CopiedDialog',
  component: CopiedDialog,
  argTypes: {},
} satisfies Meta<typeof CopiedDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CopiedDialog> = () => <CopiedDialog />;

export const Example: Story = {
  render: Template,
  args: {},
};
