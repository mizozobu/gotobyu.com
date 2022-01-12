import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Container } from './Container';

export default {
  title: 'atoms/Container',
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
