import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Index } from './index';

export default {
  title: 'features/misc/Index',
  component: Index,
  argTypes: {},
} as Meta<typeof Index>;

const Template: StoryFn<typeof Index> = () => <Index />;

export const Example = Template.bind({});
Example.args = {};
