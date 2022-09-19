import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import LeranEnglish from './learn-english.mdx';

export default {
  title: 'features/misc/LeranEnglish',
  component: LeranEnglish,
  argTypes: {},
} as ComponentMeta<typeof LeranEnglish>;

const Template: ComponentStory<typeof LeranEnglish> = () => (
  <LeranEnglish components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
