import { render, fireEvent } from '@testing-library/svelte';

import Radio from './Radio.svelte';

describe('<Radio />', function () {
  describe('with props', () => {
    const TEST_PROPS = {
      options: ['Mint', 'Cherry', 'Pineapple', 'Strawberry', 'Apple', 'Orange'],
    };

    const radioCases = TEST_PROPS.options.map((el) => [el]);

    test.each(radioCases)(
      'should render a %p <Radio /> element w/given options prop',
      async (mockOption) => {
        const { container, getByText } = render(Radio, { ...TEST_PROPS });
        const checkboxEl = container.querySelector(
          `input[value=${mockOption}]`
        );
        const svg = container.querySelector('svg');
        const labelEl = getByText(mockOption);

        expect(svg).toBeVisible();

        await fireEvent.click(checkboxEl);

        expect(checkboxEl.checked).toBeTruthy();
        expect(labelEl).toHaveClass('selected');
      }
    );

    it('should update selected radio option when clicked ', async () => {
      const mockOption = TEST_PROPS.options[0];
      const { container, getByText } = render(Radio, { ...TEST_PROPS });
      const checkboxEl = container.querySelector(`input[value=${mockOption}]`);
      const labelEl = getByText(mockOption);

      expect(checkboxEl.checked).toBeFalsy();
      await fireEvent.click(checkboxEl);

      expect(checkboxEl.checked).toBeTruthy();
      expect(labelEl).toHaveClass('selected');
    });

    it('renders with given selected option prop ', () => {
      const mockOption = TEST_PROPS.options[0];
      const mockSecondOption = TEST_PROPS.options[1];
      const { container, getByText } = render(Radio, {
        ...TEST_PROPS,
        selected: mockOption,
      });
      const selOption = container.querySelector(`input[value=${mockOption}]`);
      const unselectedOption = container.querySelector(
        `input[value=${mockSecondOption}]`
      );
      const selLabelEl = getByText(mockOption);

      expect(selOption.checked).toBeTruthy();
      expect(unselectedOption.checked).toBeFalsy();
      expect(selLabelEl).toHaveClass('selected');
    });
  });
});

describe('with default props', () => {
  it('renders default <Radio /> with 2 options', () => {
    const defaultOptions = ['Option 1', 'Option 2'];
    const { container, getByText } = render(Radio);

    defaultOptions.forEach((option) => {
      const labelEl = getByText(option);
      const checkboxEl = container.querySelector(`input[value="${option}"`);
      const svg = container.querySelector('svg');

      expect(svg).toBeVisible();
      expect(labelEl).toBeInTheDocument();
      expect(checkboxEl.checked).toBeFalsy();
    });
  });
});
