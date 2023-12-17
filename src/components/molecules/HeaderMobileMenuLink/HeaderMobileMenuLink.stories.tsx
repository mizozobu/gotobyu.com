import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMobileMenuLink } from './HeaderMobileMenuLink';

const meta = {
  title: 'components/molecules/HeaderMobileMenuLink',
  component: HeaderMobileMenuLink,
  argTypes: {},
} satisfies Meta<typeof HeaderMobileMenuLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'link',
    href: '/',
    icon: CommandLineIcon,
  },
};
