import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SchoolCard } from './SchoolCard';

export default {
  title: 'molecules/SchoolCard',
  component: SchoolCard,
  argTypes: {},
} as ComponentMeta<typeof SchoolCard>;

const Template: ComponentStory<typeof SchoolCard> = (args) => (
  <SchoolCard {...args} />
);

export const BYU = Template.bind({});
BYU.args = {
  className: 'w-48 h-60',
  colorClass: 'bg-byu',
  children: <div>byu</div>,
};

export const BYUH = Template.bind({});
BYUH.args = {
  className: 'w-48 h-60',
  colorClass: 'bg-byuh',
  children: <div>byuh</div>,
};

export const BYUI = Template.bind({});
BYUI.args = {
  className: 'w-48 h-60',
  colorClass: 'bg-byui',
  children: <div>byui</div>,
};
