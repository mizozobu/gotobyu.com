import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'molecules/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  children: (
    <div className='relative mx-auto flex h-64 w-80 items-center justify-center rounded bg-white'>
      Modal
    </div>
  ),
  onClose: () => {
    alert('close');
  },
};
