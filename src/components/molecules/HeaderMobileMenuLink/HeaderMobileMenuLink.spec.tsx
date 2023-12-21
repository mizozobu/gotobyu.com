import { jest } from '@jest/globals';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './HeaderMobileMenuLink.stories';

const { Example } = composeStories(stories);

describe('<HeaderMobileMenuLink />', () => {
  it('should render props.name', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByText('link')).toBeVisible();
  });

  it('should have props.href in href', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should call props.onClick on click', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Example onClick={handleClick} />);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have a focusable element', async () => {
    expect.assertions(2);
    const user = userEvent.setup();

    render(<Example />);

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    await user.tab();
    expect(screen.getByRole('button')).not.toHaveFocus();
  });
});
