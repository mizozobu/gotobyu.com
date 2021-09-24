import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DeadlineTabs, Props } from './DeadlineTabs';

export default {
  title: 'organisms/DeadlineTabs',
  component: DeadlineTabs,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <DeadlineTabs {...args} />;

export const Example = Template.bind({});
Example.args = {};
