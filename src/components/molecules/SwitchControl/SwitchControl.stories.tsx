import { Story, Meta } from '@storybook/react';
import React from 'react';
import { SwitchControl, Props } from './SwitchControl';

export default {
  title: 'molecules/SwitchControl',
  component: SwitchControl,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SwitchControl {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'Label',
  sr: 'Switch',
  checked: true,
  onChange: (checked: boolean) => alert(`switch to ${checked.toString()}`),
};
