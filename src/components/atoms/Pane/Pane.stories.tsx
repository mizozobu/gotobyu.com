import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Pane, Props } from './Pane';

export default {
  title: 'atoms/Pane',
  component: Pane,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Pane {...args} />;

export const Example = Template.bind({});
Example.args = {
  className: 'flex items-center bg-indigo-200',
  children: 'this is a pane',
};
