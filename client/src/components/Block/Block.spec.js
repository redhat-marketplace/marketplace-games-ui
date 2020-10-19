import { render, screen } from '@testing-library/svelte';

import Block from './Block.svelte';

describe('<Block />', function () {
  it('should render not render if a title isnt passed', function () {
    render(Block);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('should render the title passed', function () {
    const TEST_PROPS = {
      title: 'testing123',
    };
    render(Block, {
      props: {
        ...TEST_PROPS,
      },
    });

    expect(screen.getByRole('heading', { name: TEST_PROPS.title }));
  });
});
