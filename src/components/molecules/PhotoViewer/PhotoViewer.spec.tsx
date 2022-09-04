import { composeStories } from '@storybook/testing-react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './PhotoViewer.stories';

const { Single, Multi } = composeStories(stories);

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<PhotoViewer />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render props.images', () => {
    expect.hasAssertions();

    render(<Multi />);
    const images = screen.getAllByTestId('NextImage');

    // FIXME
    images.forEach((image) => {
      expect(image).toBeVisible();
    });
  });

  it('should pass props.style["--bg"] to <BgRotate />', () => {
    expect.assertions(1);

    render(<Multi />);

    expect(screen.getByTestId('BgRotate')).toHaveStyle({
      '--bg': '#002e5d',
    });
  });

  it('should render props.images[].citation', () => {
    expect.assertions(1);

    render(<Multi />);

    expect(screen.getByText('http://localhost:3000/schools/byu')).toBeVisible();
  });

  it('should render next image after 5s', () => {
    expect.assertions(1);

    render(<Multi />);
    // jest.advanceTimersByTime(5550);
    act(() => {
      jest.advanceTimersByTime(5550);
      jest.runOnlyPendingTimers();
    });

    expect(
      screen.getByText('http://localhost:3000/schools/byuh'),
    ).toBeVisible();
  });

  it('should render next image by clicking next button', async () => {
    expect.assertions(1);
    const user = userEvent.setup({ delay: null });

    render(<Multi />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(
      screen.getByText('http://localhost:3000/schools/byuh'),
    ).toBeVisible();
  });

  it('should render next image by clicking prev button', async () => {
    expect.assertions(1);
    const user = userEvent.setup({ delay: null });

    render(<Multi />);
    await user.click(screen.getByRole('button', { name: 'Previous' }));
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(
      screen.getByText('http://localhost:3000/schools/byui'),
    ).toBeVisible();
  });

  it('should render selected image by clicking dot buttons', async () => {
    expect.assertions(2);
    const user = userEvent.setup({ delay: null });

    render(<Multi />);

    await user.click(screen.getByRole('button', { name: '1' }));
    act(() => {
      jest.advanceTimersToNextTimer();
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByText('http://localhost:3000/schools/byu')).toBeVisible();

    await user.click(screen.getByRole('button', { name: '2' }));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(
      screen.getByText('http://localhost:3000/schools/byuh'),
    ).toBeVisible();

    await user.click(screen.getByRole('button', { name: '3' }));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(
      screen.getByText('http://localhost:3000/schools/byui'),
    ).toBeVisible();
  });

  it('should render image', () => {
    expect.hasAssertions();

    render(<Single />);
    const images = screen.getAllByTestId('NextImage');

    // FIXME
    images.forEach((image) => {
      expect(image).toBeVisible();
    });
  });

  it('should not render navigation buttons', () => {
    expect.assertions(1);

    render(<Single />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
