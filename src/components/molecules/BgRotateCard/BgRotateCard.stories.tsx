import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { BgRotateCard } from './BgRotateCard';

export default {
  title: 'components/molecules/BgRotateCard',
  component: BgRotateCard,
  argTypes: {},
} as Meta<typeof BgRotateCard>;

const Template: StoryFn<typeof BgRotateCard> = (args) => (
  <div className='p-16'>
    <BgRotateCard {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  children: <div>content</div>,
  style: {
    '--bg': '#002e5d',
  },
};
