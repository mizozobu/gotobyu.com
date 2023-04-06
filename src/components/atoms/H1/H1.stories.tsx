import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { H1 } from './H1';

export default {
  title: 'components/atoms/H1',
  component: H1,
  argTypes: {},
} as Meta<typeof H1>;

const Template: StoryFn<typeof H1> = (args) => <H1 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Heading',
};
