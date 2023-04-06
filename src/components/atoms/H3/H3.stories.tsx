import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { H3 } from './H3';

export default {
  title: 'components/atoms/H3',
  component: H3,
  argTypes: {},
} as Meta<typeof H3>;

const Template: StoryFn<typeof H3> = (args) => <H3 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Heading',
};
