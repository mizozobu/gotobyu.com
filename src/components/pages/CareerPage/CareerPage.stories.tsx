import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CareerPage, Props } from './CareerPage';

export default {
  title: 'pages/CareerPage',
  component: CareerPage,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CareerPage {...args} />;

export const Example = Template.bind({});
Example.args = {};
