import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TypingEffect } from './TypingEffect';

export default {
  title: 'components/molecules/TypingEffect',
  component: TypingEffect,
  argTypes: {},
} as ComponentMeta<typeof TypingEffect>;

const Template: ComponentStory<typeof TypingEffect> = (args) => (
  <TypingEffect {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: ['first string', 'second string', 'third string'],
};
