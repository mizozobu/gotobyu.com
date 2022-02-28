import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import AboutEnvironment from './about.mdx';

export default {
  title: 'environments/AboutEnvironment',
  component: AboutEnvironment,
  argTypes: {},
} as ComponentMeta<typeof AboutEnvironment>;

const Template: ComponentStory<typeof AboutEnvironment> = () => (
  <AboutEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
