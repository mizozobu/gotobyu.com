import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Type.stories';

const { Example } = composeStories(stories);

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<Type />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should assign props.caretWidth to css variable --caret-width', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('Type')).toHaveStyle({
      '--caret-width': '3px',
    });
  });

  it('should type a character every x ms', () => {
    expect.assertions(3);

    render(<Example />);

    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);

    jest.advanceTimersByTime(50 * 5); // type "12345"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^12345$/);

    jest.advanceTimersByTime(50 * 4); // type "6789"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^123456789$/);
  });

  it('should wait for props.waitAfterType ms after completing typing the text', () => {
    expect.assertions(2);

    render(<Example />);

    jest.advanceTimersByTime(50 * 9); // type "123456789"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^123456789$/);

    jest.advanceTimersByTime(2000); // wait
    expect(screen.getByTestId('Type')).toHaveTextContent(/^123456789$/);
  });

  it('should delete a character every x ms', () => {
    expect.assertions(3);

    render(<Example />);

    jest.advanceTimersByTime(50 * 9); // type "123456789"
    jest.advanceTimersByTime(2000); // wait
    expect(screen.getByTestId('Type')).toHaveTextContent(/^123456789$/);

    jest.advanceTimersByTime(50 * 5); // delete "56789"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^1234$/);

    jest.advanceTimersByTime(50 * 4); // delete "1234"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);
  });

  it('should wait for props.waitBeforeType ms after completing deleting the text', () => {
    expect.assertions(2);

    render(<Example />);

    jest.advanceTimersByTime(50 * 9); // type "123456789"
    jest.advanceTimersByTime(2000); // wait
    jest.advanceTimersByTime(50 * 9); // delete "123456789"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);

    jest.advanceTimersByTime(2000); // wait
    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);
  });

  it('should call props.onBack after completing deleting the text', () => {
    expect.assertions(1);
    const handleBack = jest.fn();

    render(<Example onBack={handleBack} />);

    jest.advanceTimersByTime(50 * 9); // type "123456789"
    jest.advanceTimersByTime(2000); // wait
    jest.advanceTimersByTime(50 * 9); // delete "123456789"
    jest.advanceTimersByTime(2000); // wait
    expect(handleBack).toHaveBeenCalledTimes(1);
  });

  it('should re-type the same text', () => {
    expect.assertions(3);

    render(<Example />);

    jest.advanceTimersByTime(50 * 9); // type "123456789"
    jest.advanceTimersByTime(2000); // wait
    jest.advanceTimersByTime(50 * 9); // delete "123456789"
    jest.advanceTimersByTime(2000); // wait
    expect(screen.getByTestId('Type')).toHaveTextContent(/^$/);

    jest.advanceTimersByTime(50 * 5); // type "12345"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^12345$/);

    jest.advanceTimersByTime(50 * 4); // type "6789"
    expect(screen.getByTestId('Type')).toHaveTextContent(/^123456789$/);
  });
});
