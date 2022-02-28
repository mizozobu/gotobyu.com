import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@l/mdx';
import CareerEnvironment from './career.mdx';

export default {
  title: 'environments/CareerEnvironment',
  component: CareerEnvironment,
  argTypes: {},
} as ComponentMeta<typeof CareerEnvironment>;

const Template: ComponentStory<typeof CareerEnvironment> = () => (
  <CareerEnvironment components={MDX} />
);

export const Example = Template.bind({});
Example.args = {};
