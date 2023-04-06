import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CustomStats } from './CustomStats';

export default {
  title: 'features/search/CustomStats',
  component: CustomStats,
  argTypes: {},
} as Meta<typeof CustomStats>;

const Template: StoryFn<typeof CustomStats> = (args) => (
  <CustomStats {...args} />
);

export const Example = Template.bind({});
Example.args = {
  nbHits: 0,
};
