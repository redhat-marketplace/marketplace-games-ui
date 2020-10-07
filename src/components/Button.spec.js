import { render } from '@testing-library/svelte';

import Button from './Button.svelte';

describe('<Button />', function () {
  const btnCases = [['primary'], ['secondary'], ['danger'], [undefined]];

  test.each(btnCases)(
    'should render a %p <button /> element w/SVG and correct styling',
    (btnType) => {
      const TEST_PROPS = {
        type: btnType,
      };
      const { container } = render(Button, { ...TEST_PROPS });
      const btn = container.querySelector('Button');
      const svg = container.querySelector('svg');
      if (!btnType) btnType = 'primary';
      expect(svg).toBeVisible();
      expect(btn).toHaveClass(btnType);
    }
  );
});
