import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { anchorState } from '@/features/anchor';
import { CopiedDialog } from './CopiedDialog';

export default {
  title: 'features/anchor/CopiedDialog',
  component: CopiedDialog,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot
        initializeState={({ set }) => {
          set(anchorState, { showCopiedModal: true });
        }}
      >
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof CopiedDialog>;

const Template: StoryFn<typeof CopiedDialog> = () => <CopiedDialog />;

export const Example = Template.bind({});
Example.args = {};
