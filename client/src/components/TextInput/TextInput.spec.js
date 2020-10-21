import { render, fireEvent } from '@testing-library/svelte';

import TextInput from './TextInput.svelte';

describe('<TextInput />', function () {
  describe('with props', () => {
    const TEST_PROPS = {
      placeholder: 'Mock placeholder',
    };

    it('renders with passed in textInput prop', () => {
      const mockProps = { ...TEST_PROPS, textInput: 'Round robin cycling' };
      const { container } = render(TextInput, { ...mockProps });
      const inputEl = container.querySelector('input');

      expect(inputEl).toBeInTheDocument();
      expect(inputEl.value).toBe(mockProps.textInput);
      expect(inputEl.placeholder).toBe(TEST_PROPS.placeholder);

      fireEvent.change(inputEl, { target: { value: 'Staggered frames' } });
      expect(inputEl.value).toBe('Staggered frames');
    });

    it('renders with passed in placeholder prop', () => {
      const { container } = render(TextInput, { ...TEST_PROPS });
      const inputEl = container.querySelector('input');

      expect(inputEl).toBeInTheDocument();
      expect(inputEl.value).toBe('');
      expect(inputEl.placeholder).toBe(TEST_PROPS.placeholder);
    });

    it('renders without icon when passed in renderIcon prop as false', () => {
      const { container } = render(TextInput, {
        ...TEST_PROPS,
        renderIcon: false,
      });
      const inputEl = container.querySelector('input');
      const icon = container.querySelector('span');

      expect(inputEl).toBeInTheDocument();
      expect(icon).not.toBeInTheDocument();
    });
  });
  describe('with default props', () => {
    it('renders default <TextInput />', () => {
      const { container } = render(TextInput);
      const inputEl = container.querySelector('input');
      const icon = container.querySelector('span');

      expect(icon).toBeInTheDocument();
      expect(inputEl).toBeInTheDocument();
      expect(inputEl.placeholder).toBe('Default text');
    });
  });
});
