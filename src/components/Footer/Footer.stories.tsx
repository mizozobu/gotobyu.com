import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer, Props } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Example = Template.bind({});
Example.args = {};
