import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InternalLink, Props } from './InternalLink';

export default {
  title: 'atoms/InternalLink',
  component: InternalLink,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <InternalLink {...args} />;

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'example',
};
