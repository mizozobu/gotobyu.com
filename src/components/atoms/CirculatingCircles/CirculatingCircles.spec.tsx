import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './CirculatingCircles.stories';

const { Static } = composeStories(stories);

describe('<CirculatingCircles />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Static />);

    expect(screen.getByTitle('circulating circles')).toBeInTheDocument();
  });

  it.todo('should animate');
});
