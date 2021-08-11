import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Digit, Props } from './Digit';

export default {
  title: 'atoms/Digit',
  component: Digit,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Digit {...args} />;

export const NoComma = Template.bind({});
NoComma.args = {
  children: 123,
};

export const Comma = Template.bind({});
Comma.args = {
  children: 123456789,
};
