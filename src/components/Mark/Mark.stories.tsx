import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Mark, Props } from './Mark';

export default {
  title: 'Example/Mark',
  component: Mark,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Mark {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'example',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: 'example '.repeat(50),
};
