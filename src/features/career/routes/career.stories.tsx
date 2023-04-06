import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Career from './career.mdx';

export default {
  title: 'features/career/Career',
  component: Career,
  argTypes: {},
} as Meta<typeof Career>;

const Template: StoryFn<typeof Career> = () => <Career components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
