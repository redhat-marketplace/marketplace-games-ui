import { render, screen } from '@testing-library/svelte';

import Difficulty from './Difficulty.svelte';

describe('<Difficulty />', function () {
  it('should render the helper text', function () {
    render(Difficulty);

    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
  });

  it('should render a heading with "Difficulty"', () => {
    render(Difficulty);

    expect(
      screen.getByRole('heading', { name: /Difficulty/i })
    ).toBeInTheDocument();
  });
});
