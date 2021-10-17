import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H3, Props } from './H3';

export default {
  title: 'atoms/H3',
  component: H3,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <H3 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
