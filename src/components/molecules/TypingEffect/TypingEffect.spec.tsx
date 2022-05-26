import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './TypingEffect.stories';

const { Example } = composeStories(stories);

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<TypingEffect />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should type the next text after typing and deleting a text', () => {
    expect.assertions(2);

    render(<Example />);

    jest.advanceTimersByTime(75 * 12); // type "first string"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^first string$/);

    jest.advanceTimersByTime(3000); // wait
    jest.advanceTimersByTime(75 * 12); // delete "first string"
    jest.advanceTimersByTime(1000); // wait
    jest.advanceTimersByTime(75 * 13); // type "second string"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^second string$/);
  });
});
