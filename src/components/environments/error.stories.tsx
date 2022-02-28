import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ErrorEnvironment } from './error';

export default {
  title: 'environments/ErrorEnvironment',
  component: ErrorEnvironment,
  argTypes: {},
} as ComponentMeta<typeof ErrorEnvironment>;

const Template: ComponentStory<typeof ErrorEnvironment> = (args) => (
  <ErrorEnvironment {...args} />
);

export const Example = Template.bind({});
Example.args = {};
