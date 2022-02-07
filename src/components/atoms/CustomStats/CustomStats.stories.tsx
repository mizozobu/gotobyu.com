import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CustomStats } from './CustomStats';

export default {
  title: 'atoms/CustomStats',
  component: CustomStats,
  argTypes: {},
} as ComponentMeta<typeof CustomStats>;

const Template: ComponentStory<typeof CustomStats> = (args) => (
  <CustomStats {...args} />
);

export const Example = Template.bind({});
Example.args = {
  nbHits: 0,
};
