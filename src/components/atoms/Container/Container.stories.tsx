import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Container, Props } from './Container';

export default {
  title: 'atoms/Container',
  component: Container,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Container {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
