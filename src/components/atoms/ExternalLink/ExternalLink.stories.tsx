import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExternalLink, Props } from './ExternalLink';

export default {
  title: 'atoms/ExternalLink',
  component: ExternalLink,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ExternalLink {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
