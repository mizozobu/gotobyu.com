import type { Meta, StoryObj } from '@storybook/react';
import { InternalLink } from './InternalLink';

const meta = {
  title: 'components/atoms/InternalLink',
  component: InternalLink,
  argTypes: {},
} satisfies Meta<typeof InternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: '/',
    children: 'Link',
  },
};
