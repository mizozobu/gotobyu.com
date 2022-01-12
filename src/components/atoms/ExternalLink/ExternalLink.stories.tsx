import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ExternalLink } from './ExternalLink';

export default {
  title: 'atoms/ExternalLink',
  component: ExternalLink,
  argTypes: {},
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'example',
};
