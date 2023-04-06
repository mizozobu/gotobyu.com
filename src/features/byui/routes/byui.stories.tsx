import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Byui from './byui.mdx';

export default {
  title: 'features/byui/Byui',
  component: Byui,
  argTypes: {},
} as Meta<typeof Byui>;

const Template: StoryFn<typeof Byui> = () => <Byui components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
