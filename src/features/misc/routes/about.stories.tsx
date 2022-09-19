import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import About from './about.mdx';

export default {
  title: 'features/misc/About',
  component: About,
  argTypes: {},
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
