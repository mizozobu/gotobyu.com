import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './SchoolTh.stories';

const { Example } = composeStories(stories);

describe('SchoolTh', () => {
  it('should be rendered', () => {
    expect.assertions(6);

    render(<Example />);

    expect(screen.getByText('BYU')).toBeVisible();
    expect(screen.getByAltText('BYU Logo')).toBeVisible();
    expect(screen.getByText('BYUH')).toBeVisible();
    expect(screen.getByAltText('BYUH Logo')).toBeVisible();
    expect(screen.getByText('BYUI')).toBeVisible();
    expect(screen.getByAltText('BYUI Logo')).toBeVisible();
  });
});
