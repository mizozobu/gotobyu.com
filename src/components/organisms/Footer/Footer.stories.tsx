import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer, Props } from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Example = Template.bind({});
Example.args = {};
