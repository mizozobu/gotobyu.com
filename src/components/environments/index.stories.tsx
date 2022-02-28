import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IndexEnvironment } from './index';

export default {
  title: 'environments/IndexEnvironment',
  component: IndexEnvironment,
  argTypes: {},
} as ComponentMeta<typeof IndexEnvironment>;

const Template: ComponentStory<typeof IndexEnvironment> = () => (
  <IndexEnvironment />
);

export const Example = Template.bind({});
Example.args = {};
