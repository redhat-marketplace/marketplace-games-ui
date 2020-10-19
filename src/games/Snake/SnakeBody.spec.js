import { render } from '@testing-library/svelte';

import SnakeBody from './SnakeBody.svelte';

describe('<SnakeBody />', function () {
  describe('default props', function () {
    it('should render with a default coordinates', function () {
      const { container } = render(SnakeBody);
      const body = container.querySelector('.snake-body');

      expect(body).toHaveStyle('grid-column-start: 10');
      expect(body).toHaveStyle('grid-row-start: 10');
    });
  });

  describe('with props', function () {
    it('should render a <div /> element with the correct grid styles based on the coordinates passed', function () {
      const TEST_PROPS = {
        coordinates: {
          x: 2,
          y: 4,
        },
      };
      const { container } = render(SnakeBody, { ...TEST_PROPS });
      const body = container.querySelector('.snake-body');

      expect(body).toHaveStyle('grid-column-start: 2');
      expect(body).toHaveStyle('grid-row-start: 4');
    });
  });
});
