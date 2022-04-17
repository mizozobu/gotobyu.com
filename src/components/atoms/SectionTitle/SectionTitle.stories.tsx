import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { type ComponentPropsWithoutRef } from 'react';
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
  as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props}>{children}</h1>
  ),
  id: '',
  active: true,
  children: 'active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props}>{children}</h1>
  ),
  id: '',
  active: false,
  children: 'inactive',
};
