import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Digit.stories';

const { NoComma, Comma, RoundUp, RoundDown, RoundTo2DecimalPlaces } =
  composeStories(stories);

describe('<Digit />', () => {
  it('should render 3 digits without comma', () => {
    expect.assertions(1);

    render(<NoComma />);

    expect(screen.getByText('123')).toBeVisible();
  });

  it('should render 4 digits with comma', () => {
    expect.assertions(1);

    render(<Comma />);

    expect(screen.getByText('1,234')).toBeVisible();
  });

  it('should round up', () => {
    expect.assertions(1);

    render(<RoundUp />);

    expect(screen.getByText('1,000')).toBeVisible();
  });

  it('should round down', () => {
    expect.assertions(1);

    render(<RoundDown />);

    expect(screen.getByText('1,000')).toBeVisible();
  });

  it('should round to 2 decimal places', () => {
    expect.assertions(1);

    render(<RoundTo2DecimalPlaces />);

    expect(screen.getByText('1,000.12')).toBeVisible();
  });
});
