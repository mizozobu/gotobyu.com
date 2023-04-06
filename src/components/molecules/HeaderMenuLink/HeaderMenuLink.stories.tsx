import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMenuLink } from './HeaderMenuLink';

const meta = {
  title: 'components/molecules/HeaderMenuLink',
  component: HeaderMenuLink,
  argTypes: {},
} satisfies Meta<typeof HeaderMenuLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'link',
    detail: 'detail for link',
    href: '/link',
    icon: CommandLineIcon,
  },
};
