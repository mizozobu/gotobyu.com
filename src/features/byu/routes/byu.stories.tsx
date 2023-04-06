import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Byu from './byu.mdx';

export default {
  title: 'features/byu/Byu',
  component: Byu,
  argTypes: {},
} as Meta<typeof Byu>;

const Template: StoryFn<typeof Byu> = () => <Byu components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
