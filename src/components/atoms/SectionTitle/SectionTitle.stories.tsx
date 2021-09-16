import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SectionTitle, Props } from './SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SectionTitle {...args} />;

export const Active = Template.bind({});
Active.args = {
  anchorFor: '',
  active: true,
  children: 'active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  anchorFor: '',
  active: false,
  children: 'inactive',
};
