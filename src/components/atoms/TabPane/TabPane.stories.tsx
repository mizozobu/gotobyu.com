import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabPane, Props } from './TabPane';

export default {
  title: 'atoms/TabPane',
  component: TabPane,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TabPane {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'example',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: 'example '.repeat(50),
};
