import { jest } from '@jest/globals';
import { composeStories } from '@storybook/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import * as stories from './TypingEffect.stories';

const { Example } = composeStories(stories);

describe('<TypingEffect />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should type the next text after typing and deleting a text', async () => {
    expect.hasAssertions();

    render(<Example />);

    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);

    act(() => {
      jest.advanceTimersByTime(50 * 12); // type "first string"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(/^first string$/),
      { timeout: 50 * 12 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(/^first string$/),
      { timeout: 2000 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * 12); // delete "first string"
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 50 * 12 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * 13); // type "second string"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(/^second string$/),
      { timeout: 50 * 13 },
    );
  });
});
