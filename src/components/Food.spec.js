import { render } from '@testing-library/svelte';

import Food from './Food.svelte';

describe('<Food />', function () {
  it('should render a <div /> element with the correct grid styles based on the coordinates passed', function () {
    const TEST_PROPS = {
      coordinates: {
        x: 0,
        y: 2,
      },
    };
    const { container } = render(Food, { ...TEST_PROPS });
    const food = container.querySelector('.food');

    expect(food).toHaveStyle('grid-row-start: 2');
    expect(food).toHaveStyle('grid-column-start: 0');
  });
});
