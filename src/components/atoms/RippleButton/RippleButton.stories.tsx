import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { RippleButton } from './RippleButton';

export default {
  title: 'atoms/RippleButton',
  component: RippleButton,
  argTypes: {},
} as ComponentMeta<typeof RippleButton>;

const Template: ComponentStory<typeof RippleButton> = (args) => (
  <RippleButton {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
  className: 'text-white rounded-md px-4 py-2',
  backgroundColor: 'rgb(49 46 129)',
  rippleColor: 'rgb(165 180 252)',
};
