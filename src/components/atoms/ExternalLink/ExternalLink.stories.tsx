import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from './ExternalLink';

const meta = {
  title: 'components/atoms/ExternalLink',
  component: ExternalLink,
  argTypes: {},
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: 'https://example.com',
    children: 'Link',
  },
};
