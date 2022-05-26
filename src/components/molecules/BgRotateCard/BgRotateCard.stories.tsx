import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BgRotateCard } from './BgRotateCard';

export default {
  title: 'molecules/BgRotateCard',
  component: BgRotateCard,
  argTypes: {},
} as ComponentMeta<typeof BgRotateCard>;

const Template: ComponentStory<typeof BgRotateCard> = (args) => (
  <div className='p-16'>
    <BgRotateCard {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  colorClass: 'bg-indigo-500',
  children: <div>content</div>,
};
