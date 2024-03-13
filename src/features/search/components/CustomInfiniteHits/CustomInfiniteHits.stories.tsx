import { action } from '@storybook/addon-actions'; // eslint-disable-line import/no-extraneous-dependencies
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import { MockInstantSearch } from '@/test/instantsearch';
import { HitItem } from '../HitItem';
import { CustomInfiniteHits } from './CustomInfiniteHits';

const meta = {
  title: 'features/search/CustomInfiniteHits',
  component: CustomInfiniteHits,
  argTypes: {
    refinePrevious: { action: 'refinePrevious' },
    refineNext: { action: 'refineNext' },
  },
} satisfies Meta<typeof CustomInfiniteHits>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CustomInfiniteHits> = (args) => (
  <MockInstantSearch>
    <CustomInfiniteHits {...args} />
  </MockInstantSearch>
);

export const Example: Story = {
  render: Template,
  args: {
    children: (hit) => (
      <HitItem
        key={hit.objectID}
        hit={{
          ...hit,
          permalink: window.location.href,
        }}
        onClick={action('click')}
      />
    ),
    hits: [
      {
        objectID: 'objectID1',
        permalink: 'https://example.com/obj2',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'This should be highlighted.',
        _tags: ['https://example.com'],
        _highlightResult: {
          h1: {
            value: 'heading 1',
            matchLevel: 'none',
            matchedWords: [],
          },
          h2: {
            value: 'heading 2',
            matchLevel: 'none',
            matchedWords: [],
          },
          h3: {
            value: 'heading 3',
            matchLevel: 'none',
            matchedWords: [],
          },
          h4: {
            value: 'heading 4',
            matchLevel: 'none',
            matchedWords: [],
          },
          h5: {
            value: 'heading 5',
            matchLevel: 'none',
            matchedWords: [],
          },
          h6: {
            fullyHighlighted: true,
            matchLevel: 'full',
            matchedWords: ['heading'],
            value:
              '<ais-highlight-0000000000>heading</ais-highlight-0000000000> 6',
          },
          content: {
            fullyHighlighted: false,
            matchLevel: 'full',
            matchedWords: ['highlighted'],
            value:
              'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
          },
        },
        _snippetResult: {
          content: {
            matchLevel: 'full',
            value:
              'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
          },
        },
      },
      {
        objectID: 'objectID2',
        permalink: 'https://example.com/obj2',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
        h5: 'heading 5',
        h6: 'heading 6',
        content: 'This should be highlighted.',
        _tags: ['https://example.com'],
        _highlightResult: {
          h1: {
            value: 'heading 1',
            matchLevel: 'none',
            matchedWords: [],
          },
          h2: {
            value: 'heading 2',
            matchLevel: 'none',
            matchedWords: [],
          },
          h3: {
            value: 'heading 3',
            matchLevel: 'none',
            matchedWords: [],
          },
          h4: {
            value: 'heading 4',
            matchLevel: 'none',
            matchedWords: [],
          },
          h5: {
            value: 'heading 5',
            matchLevel: 'none',
            matchedWords: [],
          },
          h6: {
            fullyHighlighted: true,
            matchLevel: 'full',
            matchedWords: ['heading'],
            value:
              '<ais-highlight-0000000000>heading</ais-highlight-0000000000> 6',
          },
          content: {
            fullyHighlighted: false,
            matchLevel: 'full',
            matchedWords: ['highlighted'],
            value:
              'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
          },
        },
        _snippetResult: {
          content: {
            matchLevel: 'full',
            value:
              'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
          },
        },
      },
    ],
    hasPrevious: false,
    hasMore: false,
    refineNext: fn(),
    refinePrevious: fn(),
  },
};
