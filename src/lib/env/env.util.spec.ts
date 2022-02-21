import { jest } from '@jest/globals';
import { getEnvVar } from './env.util';

describe('getEnvVar', () => {
  const OLD_ENV = process.env;
  const __key = 'KEY';
  const __value = 'VALUE';

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, [__key]: __value };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should return environment variable value when the value is set', () => {
    expect.assertions(1);

    expect(getEnvVar(__key)).toBe(__value);
  });

  it('should return environment variable value when the value is not set', () => {
    expect.assertions(1);

    expect(() => getEnvVar('unknown')).toThrow(TypeError);
  });
});
