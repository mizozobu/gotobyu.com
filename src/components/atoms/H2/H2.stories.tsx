import { Story, Meta } from '@storybook/react';
import React from 'react';
import { H2, Props } from './H2';

export default {
  title: 'atoms/H2',
  component: H2,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <H2 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
