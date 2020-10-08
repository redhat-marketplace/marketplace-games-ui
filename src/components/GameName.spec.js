import { render, screen } from '@testing-library/svelte';

import GameName from './GameName.svelte';

describe('<GameName />', function () {
  it('should not render a heading if the game name is not passed', function () {
    render(GameName);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('should render the game name', function () {
    render(GameName, { props: { name: 'Snake' } });

    expect(screen.getByRole('heading', { name: /Snake/i })).toBeInTheDocument();
  });
});
