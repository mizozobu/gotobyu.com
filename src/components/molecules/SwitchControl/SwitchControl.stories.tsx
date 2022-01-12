import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SwitchControl } from './SwitchControl';

export default {
  title: 'molecules/SwitchControl',
  component: SwitchControl,
  argTypes: {},
} as ComponentMeta<typeof SwitchControl>;

const Template: ComponentStory<typeof SwitchControl> = (args) => (
  <SwitchControl {...args} />
);

export const Example = Template.bind({});
Example.args = {
  label: 'Label',
  sr: 'Switch',
  checked: true,
  onChange: (checked: boolean) => alert(`switch to ${checked.toString()}`),
};
