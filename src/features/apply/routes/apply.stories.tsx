import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Apply from './apply.mdx';

export default {
  title: 'features/apply/Apply',
  component: Apply,
  argTypes: {},
} as Meta<typeof Apply>;

const Template: StoryFn<typeof Apply> = () => <Apply components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
