import { render, fireEvent } from '@testing-library/svelte';

import Checkbox from './Checkbox.svelte';

describe('<Checkbox />', function () {
  describe('with props', () => {
    const TEST_PROPS = {
      label: 'Test checkbox label',
    };

    it('renders Checkbox with passed in label prop', () => {
      const { container, getByText } = render(Checkbox, { ...TEST_PROPS });
      const labelEl = getByText(TEST_PROPS.label);
      const checkboxEl = container.querySelector('input');

      expect(checkboxEl.checked).toBeTruthy();
      expect(labelEl).toBeInTheDocument();
      expect(labelEl).toHaveTextContent(TEST_PROPS.label);
    });

    it('renders Checkbox with passed in checked prop for checkbox', () => {
      const { container, getByText } = render(Checkbox, {
        ...TEST_PROPS,
        checked: false,
      });
      const labelEl = getByText(TEST_PROPS.label);
      const checkboxEl = container.querySelector('input');

      expect(labelEl).toBeInTheDocument();
      expect(labelEl).toHaveTextContent(TEST_PROPS.label);
      expect(checkboxEl.checked).toBeFalsy();
    });
    it('toggles Checkbox when checkbox is clicked', async () => {
      const { container } = render(Checkbox, { ...TEST_PROPS });

      const checkboxEl = container.querySelector('input');
      expect(checkboxEl.checked).toBeTruthy();

      await fireEvent.click(checkboxEl);

      expect(checkboxEl.checked).toBeFalsy();
    });
  });
  describe('with default props', () => {
    it('renders default <Checkbox />', () => {
      const { container, getByText } = render(Checkbox);
      const labelEl = getByText('Checkbox label');
      const checkboxEl = container.querySelector('input');

      expect(checkboxEl.checked).toBeTruthy();
      expect(labelEl).toBeInTheDocument();
    });
  });
});
