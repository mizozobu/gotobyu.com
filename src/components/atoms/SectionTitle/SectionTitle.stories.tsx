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

export const Default = Template.bind({});
Default.args = {
  as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props} data-testid='mock-h1'>
      {children}
    </h1>
  ),
  id: 'title',
  children: 'Section Title',
};

export const Active = Template.bind({});
Active.args = {
  as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1 {...props} data-testid='mock-h1'>
      {children}
    </h1>
  ),
  id: 'title',
  active: true,
  children: 'Section Title',
};
