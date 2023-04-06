import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Error } from './error';

export default {
  title: 'features/misc/Error',
  component: Error,
  argTypes: {},
} as Meta<typeof Error>;

const Template: StoryFn<typeof Error> = (args) => <Error {...args} />;

export const Example = Template.bind({});
Example.args = {};
