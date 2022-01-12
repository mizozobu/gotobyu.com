import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { InternalLink } from './InternalLink';

export default {
  title: 'atoms/InternalLink',
  component: InternalLink,
  argTypes: {},
} as ComponentMeta<typeof InternalLink>;

const Template: ComponentStory<typeof InternalLink> = (args) => (
  <InternalLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'example',
};
