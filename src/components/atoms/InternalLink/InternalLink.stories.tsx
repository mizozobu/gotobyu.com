import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { InternalLink } from './InternalLink';

export default {
  title: 'components/atoms/InternalLink',
  component: InternalLink,
  argTypes: {},
} as Meta<typeof InternalLink>;

const Template: StoryFn<typeof InternalLink> = (args) => (
  <InternalLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'Link',
};
