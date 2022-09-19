import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Index } from './index';

export default {
  title: 'features/misc/Index',
  component: Index,
  argTypes: {},
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const Example = Template.bind({});
Example.args = {};
