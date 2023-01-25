import { jest } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { act, render, screen, waitFor } from '@testing-library/react';
import * as stories from './Type.stories';

const { Example } = composeStories(stories);

describe('<Type />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should pass props.style', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('Type')).toHaveStyle({
      '--caret-width': '3px',
    });
  });

  it('should type a character every x ms', async () => {
    expect.hasAssertions();

    render(<Example />);

    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);

    act(() => {
      jest.advanceTimersByTime(50 * 26); // type "abcdefghijklmnopqrstuvwxyz"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyz$/,
        ),
      { timeout: 50 * 26 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * (62 - 26)); // type "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * (62 - 26) },
    );
  });

  it('should wait for props.waitAfterType ms after completing typing the text', async () => {
    expect.hasAssertions();

    render(<Example />);

    act(() => {
      jest.advanceTimersByTime(50 * 62); // type "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 0 },
    );
  });

  it('should delete a character every x ms', async () => {
    expect.hasAssertions();

    render(<Example />);

    act(() => {
      jest.advanceTimersByTime(50 * 62); // type "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
      jest.advanceTimersByTime(50 * 10); // delete "1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$/,
        ),
      { timeout: 2000 + 50 * 10 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * (62 - 10)); // delete "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 50 * (62 - 10) },
    );
  });

  it('should wait for props.waitBeforeType ms after completing deleting the text', async () => {
    expect.hasAssertions();

    render(<Example />);

    act(() => {
      jest.advanceTimersByTime(50 * 62); // type "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
      jest.advanceTimersByTime(50 * 62); // delete "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 + 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 },
    );
  });

  it('should call props.onBack after completing deleting the text', async () => {
    expect.hasAssertions();
    const handleBack = jest.fn();

    render(<Example onBack={handleBack} />);

    act(() => {
      jest.advanceTimersByTime(50 * 62); // type "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
      jest.advanceTimersByTime(50 * 62); // delete "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 + 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(() => expect(handleBack).toHaveBeenCalledTimes(1), {
      timeout: 2000,
    });
  });

  it('should re-type the same text', async () => {
    expect.hasAssertions();

    render(<Example />);

    act(() => {
      jest.advanceTimersByTime(50 * 62); // type "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
      jest.advanceTimersByTime(50 * 62); // delete "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 + 50 * 62 },
    );

    act(() => {
      jest.advanceTimersByTime(2000); // wait
    });
    await waitFor(
      () => expect(screen.getByTestId('Type')).toHaveTextContent(/^$/),
      { timeout: 2000 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * 26); // type "abcdefghijklmnopqrstuvwxyz"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyz$/,
        ),
      { timeout: 50 * 26 },
    );

    act(() => {
      jest.advanceTimersByTime(50 * (62 - 26)); // type "fghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    });
    await waitFor(
      () =>
        expect(screen.getByTestId('Type')).toHaveTextContent(
          /^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$/,
        ),
      { timeout: 50 * (62 - 26) },
    );
  });
});
