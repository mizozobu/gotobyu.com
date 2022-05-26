import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SwitchControl.stories';

const { Checked, Unchecked } = composeStories(stories);

describe('<SwitchControl />', () => {
  it('should have props.className in className of wrapper', () => {
    expect.assertions(1);

    render(<Checked />);

    expect(screen.getByTestId('SwitchControl-wrapper')).toHaveClass(
      'shadow-md',
    );
  });

  it('should render props.label', () => {
    expect.assertions(1);

    render(<Checked />);

    expect(screen.getByText('Label')).toBeVisible();
  });

  it('should render props.sr', () => {
    expect.assertions(1);

    render(<Checked />);

    expect(screen.getByText('Switch')).toBeVisible();
  });

  it('should be checked when props.checked is true', () => {
    expect.assertions(1);

    render(<Checked />);

    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('should not be checked when props.checked is false', () => {
    expect.assertions(1);

    render(<Unchecked />);

    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  it('should call props.onChange by clicking switch', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checked onChange={handleChange} />);
    await user.click(screen.getByRole('switch'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call props.onChange by clicking label', async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checked onChange={handleChange} />);
    await user.click(screen.getByLabelText('Label'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
