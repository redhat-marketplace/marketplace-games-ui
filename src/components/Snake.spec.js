import { render } from '@testing-library/svelte';

import SnakeBody from './SnakeBody.svelte';
import Snake from './Snake.svelte';

describe('<Snake />', function () {
  describe('with default props', function () {
    const { container } = render(Snake);

    expect(container.querySelectorAll('.snake-body')).toHaveLength(0);
  });

  describe('with props', function () {
    it('should render a <SnakeBody /> for each coordinate passed into "snakeBodies"', async function () {
      const TEST_PROPS = {
        snakeBodies: [
          {
            x: 0,
            y: 4,
          },
          {
            x: 1,
            y: 4,
          },
          {
            x: 2,
            y: 4,
          },
        ],
      };
      const { container, component } = render(Snake, { ...TEST_PROPS });
      const bodyParts = container.querySelectorAll('.snake-body');

      expect(bodyParts).toHaveLength(TEST_PROPS.snakeBodies.length);

      expect(bodyParts[0]).toHaveStyle('grid-column-start: 0');
      expect(bodyParts[0]).toHaveStyle('grid-row-start: 4');

      expect(bodyParts[1]).toHaveStyle('grid-column-start: 1');
      expect(bodyParts[1]).toHaveStyle('grid-row-start: 4');

      expect(bodyParts[2]).toHaveStyle('grid-column-start: 2');
      expect(bodyParts[2]).toHaveStyle('grid-row-start: 4');

      await component.$set({ snakeBodies: [] });

      expect(container.querySelectorAll('.snake-body')).toHaveLength(0);
    });
  });
});
