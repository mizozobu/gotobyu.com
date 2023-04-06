import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Compare from './compare.mdx';

export default {
  title: 'features/compare/Compare',
  component: Compare,
  argTypes: {},
} as Meta<typeof Compare>;

const Template: StoryFn<typeof Compare> = () => <Compare components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
