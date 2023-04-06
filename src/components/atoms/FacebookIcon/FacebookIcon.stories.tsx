import type { Meta, StoryObj } from '@storybook/react';
import { FacebookIcon } from './FacebookIcon';

const meta = {
  title: 'components/atoms/FacebookIcon',
  component: FacebookIcon,
  argTypes: {},
} satisfies Meta<typeof FacebookIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
