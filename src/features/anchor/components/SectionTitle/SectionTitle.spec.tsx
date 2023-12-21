import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SectionTitle.stories';

const { Default, Active } = composeStories(stories);

describe('<SectionTitle />', () => {
  it('should be rendered', () => {
    expect.assertions(1);

    render(<Default />);

    expect(screen.getByRole('link')).toBeVisible();
  });

  it('should render props.as as a heading wrapper', () => {
    expect.assertions(1);

    render(<Default />);

    expect(screen.getByRole('heading')).toHaveAttribute(
      'data-testid',
      'mock-h1',
    );
  });

  it('should have props.id in id of heading wrapper', () => {
    expect.assertions(1);

    render(<Default />);

    expect(screen.getByRole('heading')).toHaveAttribute('id', 'title');
  });

  it('should have props.id in the hash of href', () => {
    expect.assertions(1);

    render(<Default />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      expect.stringContaining('#title'),
    );
  });

  it('should have aria-current="false" by default', () => {
    expect.assertions(1);

    render(<Default />);
    expect(screen.getByRole('heading')).toHaveAttribute(
      'aria-current',
      'false',
    );
  });

  it('should have aria-current="true" when props.active=true', () => {
    expect.assertions(1);

    render(<Active />);
    expect(screen.getByRole('heading')).toHaveAttribute('aria-current', 'true');
  });

  it('should render props.children', () => {
    expect.assertions(1);

    render(<Default />);
    expect(screen.getByRole('button')).toHaveTextContent('Section Title');
  });

  it('should have a focusable element', async () => {
    expect.assertions(2);
    const user = userEvent.setup();

    render(<Default />);

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    await user.tab();
    expect(screen.getByRole('button')).not.toHaveFocus();
  });
});
