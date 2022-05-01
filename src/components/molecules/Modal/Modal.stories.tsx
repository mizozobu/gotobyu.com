import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'molecules/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  children: (
    <button
      type='button'
      className='relative mx-auto flex h-64 w-80 items-center justify-center rounded bg-white'
    >
      button
    </button>
  ),
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  children: (
    <button
      type='button'
      className='relative mx-auto flex h-64 w-80 items-center justify-center rounded bg-white'
    >
      button
    </button>
  ),
};
