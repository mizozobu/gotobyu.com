import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Ul, Props } from './Ul';

export default {
  title: 'atoms/Ul',
  component: Ul,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Ul {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
