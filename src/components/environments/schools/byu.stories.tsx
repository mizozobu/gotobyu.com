import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import ByuEnvironment from './byu.mdx';

export default {
  title: 'environments/ByuEnvironment',
  component: ByuEnvironment,
  argTypes: {},
} as ComponentMeta<typeof ByuEnvironment>;

const Template: ComponentStory<typeof ByuEnvironment> = () => (
  <ByuEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
