import { TerminalIcon } from '@heroicons/react/outline';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HeaderMenuPopover } from './HeaderMenuPopover';

export default {
  title: 'organisms/HeaderMenuPopover',
  component: HeaderMenuPopover,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof HeaderMenuPopover>;

const Template: ComponentStory<typeof HeaderMenuPopover> = (args) => (
  <div className='w-24'>
    <HeaderMenuPopover {...args} />
  </div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  icon: TerminalIcon,
  children: ({ close }) => (
    <button type='button' onClick={close}>
      Link
    </button>
  ),
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: 'Button',
  children: ({ close }) => (
    <button type='button' onClick={close}>
      Link
    </button>
  ),
};
