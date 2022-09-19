import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Internship from './internship.mdx';

export default {
  title: 'features/internship/Internship',
  component: Internship,
  argTypes: {},
} as ComponentMeta<typeof Internship>;

const Template: ComponentStory<typeof Internship> = () => (
  <Internship components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
