import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SwitchControl } from './SwitchControl';

export default {
  title: 'components/molecules/SwitchControl',
  component: SwitchControl,
  argTypes: {},
} as ComponentMeta<typeof SwitchControl>;

const Template: ComponentStory<typeof SwitchControl> = (args) => (
  <SwitchControl {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  className: 'shadow-md',
  label: 'Label',
  sr: 'Switch',
  checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  className: 'shadow-md',
  label: 'Label',
  sr: 'Switch',
  checked: false,
};
