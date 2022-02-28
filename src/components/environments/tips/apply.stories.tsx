import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import ApplyEnvironment from './apply.mdx';

export default {
  title: 'environments/ApplyEnvironment',
  component: ApplyEnvironment,
  argTypes: {},
} as ComponentMeta<typeof ApplyEnvironment>;

const Template: ComponentStory<typeof ApplyEnvironment> = () => (
  <ApplyEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
