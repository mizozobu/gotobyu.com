import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './PageCard.stories';

const { Example } = composeStories(stories);

describe('<PageCard />', () => {
  it('should render props.icon', () => {
    expect.assertions(1);
    const icon = jest.fn();

    render(<Example icon={icon} />);

    expect(icon).toHaveBeenCalledTimes(1);
  });

  it('should render props.name', () => {
    expect.assertions(1);
    const icon = jest.fn();

    render(<Example icon={icon} />);

    expect(screen.getByText('What is Lorem Ipsum?')).toBeVisible();
  });

  it('should render props.description', () => {
    expect.assertions(1);
    const icon = jest.fn();

    render(<Example icon={icon} />);

    expect(
      screen.getByText(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      ),
    ).toBeVisible();
  });
});
