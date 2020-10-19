import { render, screen } from '@testing-library/svelte';

import Layout from './Layout.svelte';

describe('<Layout />', function () {
  beforeEach(() => {
    render(Layout);
  });

  it('should render the home navigation item', function () {
    expect(
      screen.getByRole('link', { name: /RHM Games/i, href: '/' })
    ).toBeInTheDocument();
  });

  it('should render a left rail', function () {
    expect(screen.getByTestId('left-rail')).toBeInTheDocument();
  });

  it('should render an aside element', function () {
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('should render the game name', function () {
    expect(screen.getByRole('heading', { name: /Snake/i })).toBeInTheDocument();
  });

  it('should render the game score', function () {
    expect(screen.getByRole('heading', { name: /Score/i })).toBeInTheDocument();
  });
});
