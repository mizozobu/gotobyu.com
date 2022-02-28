import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import ByuhEnvironment from './byuh.mdx';

export default {
  title: 'environments/ByuhEnvironment',
  component: ByuhEnvironment,
  argTypes: {},
} as ComponentMeta<typeof ByuhEnvironment>;

const Template: ComponentStory<typeof ByuhEnvironment> = () => (
  <ByuhEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
