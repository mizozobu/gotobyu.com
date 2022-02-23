import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SectionTitle } from './SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
  argTypes: {},
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => (
  <SectionTitle {...args} />
);

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
