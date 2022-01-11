import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Type, Props } from './Type';

export default {
  title: 'atoms/Type',
  component: Type,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Type {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: "Let's start typing!!",
};
