import { jest } from '@jest/globals';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './Modal.stories';

const { Open, Closed } = composeStories(stories);

describe('<Modal />', () => {
  it('should be rendered', () => {
    expect.assertions(1);
    const handleClose = jest.fn();

    render(<Open onClose={handleClose} />);

    expect(screen.getByRole('dialog')).toHaveTextContent('button');
  });

  it('should not be rendered', () => {
    expect.assertions(1);
    const handleClose = jest.fn();

    render(<Closed onClose={handleClose} />);

    expect(screen.queryByText('button')).not.toBeInTheDocument();
  });

  it('should render props.children', () => {
    expect.assertions(1);
    const handleClose = jest.fn();

    render(<Open onClose={handleClose} />);

    expect(screen.getByText('button')).toBeVisible();
  });

  it('shouldcall props.onClose by clicking overlay', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(<Open onClose={handleClose} />);
    await user.click(screen.getByTestId('modal-overlay'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call props.onClose by ESC key', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(<Open onClose={handleClose} />);
    await user.keyboard('{Escape}');

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
