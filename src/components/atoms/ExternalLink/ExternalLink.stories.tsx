import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { ExternalLink } from './ExternalLink';

export default {
  title: 'components/atoms/ExternalLink',
  component: ExternalLink,
  argTypes: {},
} as Meta<typeof ExternalLink>;

const Template: StoryFn<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  href: 'https://example.com',
  children: 'Link',
};
