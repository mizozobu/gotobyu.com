import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'components/molecules/Modal',
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    children: (
      <button
        type='button'
        className='relative mx-auto flex h-64 w-80 items-center justify-center rounded bg-white'
      >
        button
      </button>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    children: (
      <button
        type='button'
        className='relative mx-auto flex h-64 w-80 items-center justify-center rounded bg-white'
      >
        button
      </button>
    ),
  },
};
