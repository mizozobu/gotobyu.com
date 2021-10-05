import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SectionTitle, Props } from './SectionTitle';

export default {
  title: 'molecules/SectionTitle',
  component: SectionTitle,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SectionTitle {...args} />;

export const Active = Template.bind({});
Active.args = {
  id: '',
  active: true,
  children: 'active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  id: '',
  active: false,
  children: 'inactive',
};
