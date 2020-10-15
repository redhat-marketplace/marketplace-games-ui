import { render, screen } from '@testing-library/svelte';

import App from './App.svelte';

describe('<App />', function () {
  beforeEach(() => {
    render(App);
  });

  it('should render the base layout', function () {
    expect(screen.getByTestId('left-rail')).toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('should render a game', function () {
    expect(screen.getByTestId('game-board')).toBeInTheDocument();
  });

  it('should hide the Start button after a user clicks', async function () {
    const button = screen.getByRole('button', { name: /Start/i });

    await fireEvent.click(button);

    expect(
      screen.queryByRole('button', { name: /Start/i })
    ).not.toBeInTheDocument();
  });
});
