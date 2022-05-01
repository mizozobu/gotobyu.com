import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './Modal.stories';

const { Open, Closed } = composeStories(stories);

describe('<Modal />', () => {
  it('should be rendered', () => {
    expect.assertions(1);
    const handleClose = jest.fn();

    const { getByRole } = render(<Open onClose={handleClose} />);

    expect(getByRole('dialog')).toHaveTextContent('button');
  });

  it('should not be rendered', () => {
    expect.assertions(1);
    const handleClose = jest.fn();

    const { queryByText } = render(<Closed onClose={handleClose} />);

    expect(queryByText('button')).not.toBeInTheDocument();
  });

  it('should be closed by clicking overlay', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClose = jest.fn();

    const { getByTestId } = render(<Open onClose={handleClose} />);
    await user.click(getByTestId('modal-overlay'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should be closed by ESC key', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClose = jest.fn();

    render(<Open onClose={handleClose} />);
    await user.keyboard('{Escape}');

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
