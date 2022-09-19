import { type Algoliast } from '@/features/search';
import { algoliastSkip } from './algoliastSkip';

describe('algoliastSkip', () => {
  it('should return html without whitespace node', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: 'heading 6',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading 1',
      h2: 'heading 2',
      h3: 'heading 3',
      h4: 'heading 4',
      h5: 'heading 5',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };

    expect(algoliastSkip(obj1, obj2)).toBe(false);
  });
});
