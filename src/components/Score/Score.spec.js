import { render, screen } from '@testing-library/svelte';

import Score from './Score.svelte';

describe('<Score />', function () {
  const TEST_PROPS = {
    scores: [
      { title: 'Current', score: 100 },
      { title: 'PB', score: 200 },
    ],
  };

  it('should render "No scores available" if no scores are passed', function () {
    render(Score);

    expect(screen.getByText('No scores available')).toBeInTheDocument();
  });

  it('should render each score passed', function () {
    render(Score, {
      props: {
        ...TEST_PROPS,
      },
    });

    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();

    expect(screen.getByText('PB')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should render a heading with "Score"', () => {
    render(Score, {
      props: {
        ...TEST_PROPS,
      },
    });

    expect(screen.getByRole('heading', { name: /Score/i })).toBeInTheDocument();
  });
});
