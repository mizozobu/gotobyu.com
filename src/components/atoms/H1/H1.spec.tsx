import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './H1.stories';

const { Example } = composeStories(stories);

describe('<H1 />', () => {
  it('should render props.children', () => {
    expect.assertions(1);

    render(<Example />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });
});
