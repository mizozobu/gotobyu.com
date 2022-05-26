import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './FacebookIcon.stories';

const { Example } = composeStories(stories);

describe('<FacebookIcon />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByTitle('facebook')).toBeInTheDocument();
  });
});
