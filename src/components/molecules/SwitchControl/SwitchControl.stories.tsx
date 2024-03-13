import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SwitchControl } from './SwitchControl';

const meta = {
  title: 'components/molecules/SwitchControl',
  component: SwitchControl,
  argTypes: {},
} satisfies Meta<typeof SwitchControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    className: 'shadow-md',
    label: 'Label',
    sr: 'Switch',
    checked: true,
    onChange: fn(),
  },
};

export const Unchecked: Story = {
  args: {
    className: 'shadow-md',
    label: 'Label',
    sr: 'Switch',
    checked: false,
    onChange: fn(),
  },
};
