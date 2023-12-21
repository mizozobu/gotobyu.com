import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './Strong.stories';

const { SingleLine } = composeStories(stories);

describe('<Strong />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<SingleLine />);

    expect(screen.getByText('Strong')).toBeVisible();
  });
});
