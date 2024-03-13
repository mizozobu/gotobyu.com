import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HeaderMobileMenuDialog } from './HeaderMobileMenuDialog';

const meta = {
  title: 'components/organisms/HeaderMobileMenuDialog',
  component: HeaderMobileMenuDialog,
  argTypes: {},
} satisfies Meta<typeof HeaderMobileMenuDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};
