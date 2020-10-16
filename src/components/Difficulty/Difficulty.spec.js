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

  it('should render a <Radio /> with given "Difficulty" options', () => {
    const TEST_PROPS = {
      selected: 'Hard',
      options: ['Easy', 'Medium', 'Hard'],
    };

    const { container } = render(Difficulty, { ...TEST_PROPS });

    TEST_PROPS.options.forEach((option) => {
      const checkboxEl = container.querySelector(`input[value=${option}]`);
      expect(checkboxEl).toBeInTheDocument();
      expect(checkboxEl.checked).toBe(option === TEST_PROPS.selected);
    });
  });
});
