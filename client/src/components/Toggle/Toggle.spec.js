import { render, fireEvent } from '@testing-library/svelte';

import Toggle from './Toggle.svelte';

describe('<Toggle />', function () {
  describe('with props', () => {
    it('renders <Toggle> with passed in toggled prop', async () => {
      const TEST_PROPS = {
        toggled: true,
        onLabel: 'Toggled On',
        offLabel: 'Toggled Off',
      };
      const { container } = render(Toggle, { props: { ...TEST_PROPS } });
      const label = container.querySelector('label');
      const input = container.querySelector('input');

      expect(label).toHaveTextContent(TEST_PROPS.onLabel);

      expect(input.checked).toBeTruthy();
      expect(input.disabled).toBeFalsy();

      await fireEvent.click(input);

      expect(input.checked).toBeFalsy();
      expect(label).toHaveTextContent(TEST_PROPS.offLabel);
    });

    it('renders <Toggle> with passed in label props', async () => {
      const TEST_PROPS = { onLabel: 'Approved', offLabel: 'Unapproved' };
      const { container } = render(Toggle, { props: { ...TEST_PROPS } });
      const label = container.querySelector('label');
      const input = container.querySelector('input');

      expect(label).toHaveTextContent(TEST_PROPS.offLabel);
      expect(input.disabled).toBeFalsy();
      expect(input.checked).toBeFalsy();

      await fireEvent.click(input);

      expect(label).toHaveTextContent(TEST_PROPS.onLabel);
      expect(input.checked).toBeTruthy();
    });

    it('renders disabled <Toggle /> with passed in disabled prop', async () => {
      const TEST_PROPS = {
        disabled: true,
        onLabel: 'Approved',
        offLabel: 'Unapproved',
      };
      const { container } = render(Toggle, { props: { ...TEST_PROPS } });
      const label = container.querySelector('label');
      const input = container.querySelector('input');

      expect(input.disabled).toBeTruthy();
      expect(input.checked).toBeFalsy();
      expect(label).toHaveTextContent(TEST_PROPS.offLabel);

      await fireEvent.click(input);

      expect(label).toHaveTextContent(TEST_PROPS.offLabel);
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('with default props', () => {
    it('renders <Toggle /> w/correct defaults', () => {
      const { container } = render(Toggle);
      const label = container.querySelector('label');
      const input = container.querySelector('input');

      expect(label).toHaveTextContent('Off');
      expect(input.disabled).toBeFalsy();
    });
  });
});
