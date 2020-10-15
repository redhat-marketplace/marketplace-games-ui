import { render } from '@testing-library/svelte';

import Link from './Link.svelte';

describe('<Link />', function () {
  describe('with props', () => {
    it('renders <Link> with passed in href prop', () => {
      const TEST_PROPS = { href: 'https://mock-test-url.com' };
      const { container } = render(Link, { props: { ...TEST_PROPS } });
      const anchor = container.querySelector('a');

      expect(anchor.href).toContain(TEST_PROPS.href);
    });

    it('renders <Link> with passed in target prop', () => {
      const TEST_PROPS = { href: 'https://mock-test-url.com', target: '_self' };
      const { container } = render(Link, { props: { ...TEST_PROPS } });
      const anchor = container.querySelector('a');

      expect(anchor.target).not.toContain('_blank');
      expect(anchor.target).toContain(TEST_PROPS.target);
    });

    it('renders <Link> with passed in rel prop', () => {
      const TEST_PROPS = { href: 'https://mock-test-url.com', rel: 'mock rel' };
      const { container } = render(Link, { props: { ...TEST_PROPS } });
      const anchor = container.querySelector('a');

      expect(anchor.rel).toContain(TEST_PROPS.rel);
    });

    it('renders <Link> with no anchor, if disabled prop is true ', () => {
      const TEST_PROPS = {
        disabled: true,
        href: 'https://mock-test-url.com',
        rel: 'mock rel',
      };
      const { container } = render(Link, { props: { ...TEST_PROPS } });
      const anchor = container.querySelector('a');
      const text = container.querySelector('span');

      expect(text).toBeInTheDocument();
      expect(anchor).not.toBeInTheDocument();
      expect(text).toHaveAttribute('disabled', 'true');
    });
  });
  describe('with default props', () => {
    it('renders default <Link />', () => {
      const { container } = render(Link);
      const anchor = container.querySelector('a');

      expect(anchor.href).toContain('#');
      expect(anchor.target).toContain('_blank');
      expect(anchor.rel).toContain('noopener noreferrer');
      expect(anchor).not.toHaveAttribute('disabled');
    });
  });
});
