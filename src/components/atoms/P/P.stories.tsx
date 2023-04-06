import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { P } from './P';

export default {
  title: 'components/atoms/P',
  component: P,
  argTypes: {},
} as Meta<typeof P>;

const Template: StoryFn<typeof P> = (args) => <P {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Paragraph',
};
