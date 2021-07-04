import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabNavBar, Props } from './TabNavBar';

export default {
  title: 'atoms/TabNavBar',
  component: TabNavBar,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TabNavBar {...args} />;

export const Example = Template.bind({});
Example.args = {};
