import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import LeranEnglish from './learn-english.mdx';

export default {
  title: 'features/misc/LeranEnglish',
  component: LeranEnglish,
  argTypes: {},
} as Meta<typeof LeranEnglish>;

const Template: StoryFn<typeof LeranEnglish> = () => (
  <LeranEnglish components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
