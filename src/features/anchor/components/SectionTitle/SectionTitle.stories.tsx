import type { StoryFn, Meta } from '@storybook/react';
import React, { type ComponentPropsWithoutRef } from 'react';
import { RecoilRoot } from 'recoil';
import { SectionTitle } from './SectionTitle';

export default {
  title: 'features/anchor/SectionTitle',
  component: SectionTitle,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof SectionTitle>;

const Template: StoryFn<typeof SectionTitle> = (args) => (
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
  id: '', // HACK: cannot set window.location.hash on storybook
  children: 'Section Title',
};
