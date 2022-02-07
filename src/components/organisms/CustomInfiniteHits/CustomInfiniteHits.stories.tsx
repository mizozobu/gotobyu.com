import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HitItem } from '@cmp/molecules/HitItem';
import { MockInstantSearch } from '~/stories/mock/algolia';
import { CustomInfiniteHits } from './CustomInfiniteHits';

export default {
  title: 'organisms/CustomInfiniteHits',
  component: CustomInfiniteHits,
  argTypes: {},
} as ComponentMeta<typeof CustomInfiniteHits>;

const Template: ComponentStory<typeof CustomInfiniteHits> = (args) => (
  <MockInstantSearch>
    <CustomInfiniteHits {...args}>
      {(hit) => (
        <HitItem key={hit.objectID} hit={hit} onClick={() => alert('click')} />
      )}
    </CustomInfiniteHits>
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {
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
  refinePrevious: () => alert('show prev'),
  refineNext: () => alert('show more'),
};
