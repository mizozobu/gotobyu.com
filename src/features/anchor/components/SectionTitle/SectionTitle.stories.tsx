import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentPropsWithoutRef } from 'react';
import { RecoilRoot } from 'recoil';
import { SectionTitle } from './SectionTitle.client';

const meta = {
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
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
      <h1 {...props} data-testid='mock-h1'>
        {children}
      </h1>
    ),
    id: 'title',
    children: 'Section Title',
  },
};

export const Active: Story = {
  args: {
    as: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
      <h1 {...props} data-testid='mock-h1'>
        {children}
      </h1>
    ),
    id: '', // HACK: cannot set window.location.hash on storybook
    children: 'Section Title',
  },
};
