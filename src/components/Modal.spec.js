import { render } from '@testing-library/svelte';

import Modal from './Modal.svelte';

describe('<Modal />', function () {
  const TEST_PROPS = { open: true };
  describe('with props', () => {
    it('should render modal attached to body if given attachToRoot prop', () => {
      const { container } = render(Modal, {
        ...TEST_PROPS,
        attachToRoot: true,
      });
      const modal = container.querySelector('.modal');
      expect(document.body.children.length).toBeGreaterThan(1);

      const bodyChildren = Array.from(document.body.children);
      expect(bodyChildren.some((child) => child === modal)).toBeTruthy();
    });

    it('should render backdrop, if passed appropriate props (attachToRoot, backdrop)', () => {
      const { container } = render(Modal, {
        ...TEST_PROPS,
        backdrop: true,
        attachToRoot: true,
      });
      const backdropEl = container.querySelector('.backdrop');
      expect(backdropEl).toBeInTheDocument();
    });

    it('should not render modal, if open prop is false', () => {
      const { container } = render(Modal);
      const backdropEl = container.querySelector('.backdrop');
      const modal = container.querySelector('.modal');
      const svgBg = container.querySelector('svg');
      expect(backdropEl).toBeNull();
      expect(modal).toBeNull();
      expect(svgBg).toBeNull();
    });
  });

  describe('with default props', () => {
    it('renders an empty modal', () => {
      const { container } = render(Modal, { ...TEST_PROPS });
      const modal = container.querySelector('.modal-content');
      const svgBg = container.querySelector('svg');

      expect(svgBg).toBeVisible();
      expect(modal).not.toHaveTextContent();
    });
  });
});
