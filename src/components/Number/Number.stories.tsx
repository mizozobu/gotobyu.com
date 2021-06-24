import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Number, Props } from './Number';

export default {
  title: 'Example/Number',
  component: Number,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Number {...args} />;

export const NoComma = Template.bind({});
NoComma.args = {
  children: 123,
};

export const Comma = Template.bind({});
Comma.args = {
  children: 123456789,
};
