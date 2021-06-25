import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FacebookIcon, Props } from './FacebookIcon';

export default {
  title: 'atoms/FacebookIcon',
  component: FacebookIcon,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <FacebookIcon {...args} />;

export const Example = Template.bind({});
Example.args = {};
