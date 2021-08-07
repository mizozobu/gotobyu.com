import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GradientText, Props } from './GradientText';

export default {
  title: 'atoms/GradientText',
  component: GradientText,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <GradientText {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
  start: '#acb6e5',
  stop: '#86fde8',
};
