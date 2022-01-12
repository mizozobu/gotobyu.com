import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Strong } from './Strong';

export default {
  title: 'atoms/Strong',
  component: Strong,
  argTypes: {},
} as ComponentMeta<typeof Strong>;

const Template: ComponentStory<typeof Strong> = (args) => <Strong {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'example',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children: 'example '.repeat(50),
};
