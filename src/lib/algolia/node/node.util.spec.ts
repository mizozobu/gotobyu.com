import '@jest/globals';
import { minifyHtml } from './node.util';

describe('minifyHtml', () => {
  it('should return html without whitespace node', () => {
    expect.assertions(1);

    const html = `
      <div>
        a
      </div>


      <div>  b  </div>
    `;

    expect(minifyHtml(html)).toBe('<div>a</div><div>b</div>');
  });
});

/**
 * TODO: test after jest supports esm mock
 * jest.mock, __mocks__, dynamic import
 * maybe mock must be in the same scope with the import being used?
 * @see https://github.com/facebook/jest/issues/10025
 */
describe('exists', () => {
  it.todo('test exists when jest supports esm mock');
});

/**
 * TODO: test after jest supports esm mock
 * jest.mock, __mocks__, dynamic import
 * maybe mock must be in the same scope with the import being used?
 * @see https://github.com/facebook/jest/issues/10025
 */
describe('indexDocument', () => {
  it.todo('test indexDocument when jest supports esm mock');
});
