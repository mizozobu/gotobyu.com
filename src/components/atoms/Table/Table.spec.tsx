import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Table.stories';

const { Example } = composeStories(stories);

describe('<Table />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('table')).toBeVisible();
  });

  it('should pass props.style', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('table')).toHaveStyle({
      '--thick-border-color': 'indigo',
    });
  });

  it('should have props.className in className of wrapper', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTestId('Table')).toHaveClass('shadow-md p-4');
  });
});
