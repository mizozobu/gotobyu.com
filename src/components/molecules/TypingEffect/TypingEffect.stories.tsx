import type { Meta, StoryObj } from '@storybook/react';
import { TypingEffect } from './TypingEffect.client';

const meta = {
  title: 'components/molecules/TypingEffect',
  component: TypingEffect,
  argTypes: {},
} satisfies Meta<typeof TypingEffect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: ['first string', 'second string', 'third string'],
    typeSpeed: 50,
    waitBeforeType: 2000,
    waitAfterType: 2000,
  },
};
