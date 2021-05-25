import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Mark, Props } from './Mark';

export default {
  title: 'Example/Mark',
  component: Mark,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Mark {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
