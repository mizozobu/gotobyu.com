import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H1, Props } from './H1';

export default {
  title: 'atoms/H1',
  component: H1,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <H1 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
