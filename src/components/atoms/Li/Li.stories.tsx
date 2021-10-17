import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Li, Props } from './Li';

export default {
  title: 'atoms/Li',
  component: Li,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Li {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
