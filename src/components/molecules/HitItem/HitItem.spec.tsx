import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './HitItem.stories';

const { Example } = composeStories(stories);

describe('<HitItem />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('button')).toBeVisible();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should have props.hit.href in href', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com/obj2',
    );
  });

  it('should call props.onClick on click', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Example onClick={handleClick} />);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should a focusable element', async () => {
    expect.assertions(2);
    const user = userEvent.setup();

    render(<Example />);

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    await user.tab();
    expect(screen.getByRole('button')).not.toHaveFocus();
  });
});
