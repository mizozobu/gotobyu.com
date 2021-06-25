import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Hero, Props } from './Hero';

export default {
  title: 'organisms/Hero',
  component: Hero,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Hero {...args} />;

export const Example = Template.bind({});
Example.args = {};
