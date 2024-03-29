import { getText } from './getText';

describe('getText', () => {
  it('should return recursively merged text from tree', () => {
    expect.assertions(1);

    const text = getText({
      type: 'element',
      tagName: 'div',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [
            {
              type: 'text',
              value: 'a',
            },
            {
              type: 'text',
              value: 'b ',
            },
          ],
        },
        {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: [
            {
              type: 'element',
              tagName: 'p',
              properties: {},
              children: [
                {
                  type: 'text',
                  value: '\n \rc\r\n',
                },
              ],
            },
            {
              type: 'element',
              tagName: 'div',
              properties: {},
              children: [
                {
                  type: 'text',
                  value: '  d  ',
                },
              ],
            },
          ],
        },
      ],
    });

    expect(text).toBe('ab  c  d  ');
  });
});
