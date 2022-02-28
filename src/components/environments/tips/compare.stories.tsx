import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import CompareEnvironment from './compare.mdx';

export default {
  title: 'environments/CompareEnvironment',
  component: CompareEnvironment,
  argTypes: {},
} as ComponentMeta<typeof CompareEnvironment>;

const Template: ComponentStory<typeof CompareEnvironment> = () => (
  <CompareEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
