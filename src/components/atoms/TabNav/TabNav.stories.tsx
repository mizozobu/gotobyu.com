import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabNav, Props } from './TabNav';

export default {
  title: 'atoms/TabNav',
  component: TabNav,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TabNav {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'example',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: 'example '.repeat(50),
};
