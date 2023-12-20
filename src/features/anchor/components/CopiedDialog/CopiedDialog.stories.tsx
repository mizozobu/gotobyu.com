import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { anchorState } from '@/features/anchor';
import { CopiedDialog } from './CopiedDialog.client';

const meta = {
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
} satisfies Meta<typeof CopiedDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CopiedDialog> = () => <CopiedDialog />;

export const Example: Story = {
  render: Template,
  args: {},
};
