import { Story, Meta } from '@storybook/react';
import React from 'react';
import { TypingEffect, Props } from './TypingEffect';

export default {
  title: 'molecules/TypingEffect',
  component: TypingEffect,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TypingEffect {...args} />;

export const Example = Template.bind({});
Example.args = {};
