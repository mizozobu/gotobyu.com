import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Strong, Props } from './Strong';

export default {
  title: 'atoms/Strong',
  component: Strong,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Strong {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'example',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: 'example '.repeat(50),
};
