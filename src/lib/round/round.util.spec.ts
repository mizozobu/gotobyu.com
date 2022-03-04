import { round } from './round.util';

describe('round', () => {
  it.each(
    // prettier-ignore
    [
      { value: 0.12345, decimals: 2, expected: 0.12, desc: 'round' },
      { value: 0.12345, decimals: 6, expected: 0.123450, desc: 'add tailing 0' },
      { value: 12.345, decimals: 0, expected: 12, desc: '0 decimal places' },
      { value: 12.345, decimals: -1, expected: 10, desc: 'negative decimal places' },
      { value: 12.345, decimals: 2, expected: 12.35, desc: 'round up' },
      { value: 12.344, decimals: 2, expected: 12.34, desc: 'round down' },
      { value: -0.12345, decimals: 2, expected: -0.12, desc: 'negative value' },
    ],
  )(
    'should round "$value" to $decimals decimal places ($desc)',
    ({ value, decimals, expected }) => {
      expect.assertions(1);

      expect(round(value, decimals)).toBe(expected);
    },
  );

  it('should throw when decimal place is not an integer', () => {
    expect.assertions(1);

    expect(() => round(0.12345, 1.1)).toThrow(Error);
  });
});
