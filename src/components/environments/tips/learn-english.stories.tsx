import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import LeranEnglishEnvironment from './learn-english.mdx';

export default {
  title: 'environments/LeranEnglishEnvironment',
  component: LeranEnglishEnvironment,
  argTypes: {},
} as ComponentMeta<typeof LeranEnglishEnvironment>;

const Template: ComponentStory<typeof LeranEnglishEnvironment> = () => (
  <LeranEnglishEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
