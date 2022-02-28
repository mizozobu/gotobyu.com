import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import InternshipEnvironment from './internship.mdx';

export default {
  title: 'environments/InternshipEnvironment',
  component: InternshipEnvironment,
  argTypes: {},
} as ComponentMeta<typeof InternshipEnvironment>;

const Template: ComponentStory<typeof InternshipEnvironment> = () => (
  <InternshipEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
