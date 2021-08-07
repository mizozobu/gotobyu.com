import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DrawBorderButton, Props } from './DrawBorderButton';

export default {
  title: 'atoms/DrawBorderButton',
  component: DrawBorderButton,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <DrawBorderButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
  className: 'w-20 h-20 text-indigo-500',
  borderColor: 'rgba(99, 102, 241, 1)',
};
