import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Type } from './Type';

export default {
  title: 'components/atoms/Type',
  component: Type,
  argTypes: {},
} as ComponentMeta<typeof Type>;

const Template: ComponentStory<typeof Type> = (args) => <Type {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: '123456789',
  style: {
    '--caret-width': '3px',
  },
  typeSpeed: 50,
  waitBeforeType: 2000,
  waitAfterType: 2000,
};
