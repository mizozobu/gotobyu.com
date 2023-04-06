import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { TypingEffect } from './TypingEffect';

export default {
  title: 'components/molecules/TypingEffect',
  component: TypingEffect,
  argTypes: {},
} as Meta<typeof TypingEffect>;

const Template: StoryFn<typeof TypingEffect> = (args) => (
  <TypingEffect {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: ['first string', 'second string', 'third string'],
  typeSpeed: 50,
  waitBeforeType: 2000,
  waitAfterType: 2000,
};
