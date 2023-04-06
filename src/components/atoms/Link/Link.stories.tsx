import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
  title: 'components/atoms/Link',
  component: Link,
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: '/',
    children: 'Link',
  },
};
