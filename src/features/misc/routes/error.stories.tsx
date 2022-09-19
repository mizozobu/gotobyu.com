import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Error } from './error';

export default {
  title: 'features/misc/Error',
  component: Error,
  argTypes: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Example = Template.bind({});
Example.args = {};
