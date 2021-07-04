import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TabContent, Props } from './TabContent';

export default {
  title: 'atoms/TabContent',
  component: TabContent,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TabContent {...args} />;

export const Example = Template.bind({});
Example.args = {};
