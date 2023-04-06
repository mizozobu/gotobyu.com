import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Internship from './internship.mdx';

export default {
  title: 'features/internship/Internship',
  component: Internship,
  argTypes: {},
} as Meta<typeof Internship>;

const Template: StoryFn<typeof Internship> = () => (
  <Internship components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
