import { getSmallestHeadingTag } from './getSmallestHeadingTag';

describe('getSmallestHeadingTag', () => {
  it.each(
    // prettier-ignore
    [
      { hit: { h1: 'h1', h2: '', h3: '', h4: '', h5: '', h6: '' }, expected: 'h1' },
      { hit: { h1: 'h1', h2: 'h2', h3: '', h4: '', h5: '', h6: '' }, expected: 'h2' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: '', h5: '', h6: '' }, expected: 'h3' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: '', h6: '' }, expected: 'h4' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: '' }, expected: 'h5' },
      { hit: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' }, expected: 'h6' },
    ],
  )(
    'should return "$expected" when $expected is the smallest heading tag',
    ({ hit, expected }) => {
      expect.assertions(1);

      expect(getSmallestHeadingTag(hit)).toBe(expected);
    },
  );

  it('should throw when none of the heading tags have value', () => {
    expect.assertions(1);

    expect(() =>
      getSmallestHeadingTag({ h1: '', h2: '', h3: '', h4: '', h5: '', h6: '' }),
    ).toThrow(
      'cannot get the smallest heading tag since all headings are empty',
    );
  });
});
