import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BgRotateCard } from './BgRotateCard';

export default {
  title: 'molecules/BgRotateCard',
  component: BgRotateCard,
  argTypes: {},
} as ComponentMeta<typeof BgRotateCard>;

const Template: ComponentStory<typeof BgRotateCard> = (args) => (
  <BgRotateCard {...args} />
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
