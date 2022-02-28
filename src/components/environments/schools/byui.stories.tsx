import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import ByuiEnvironment from './byui.mdx';

export default {
  title: 'environments/ByuiEnvironment',
  component: ByuiEnvironment,
  argTypes: {},
} as ComponentMeta<typeof ByuiEnvironment>;

const Template: ComponentStory<typeof ByuiEnvironment> = () => (
  <ByuiEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
