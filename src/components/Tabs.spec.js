import { render, fireEvent } from '@testing-library/svelte';

import Tabs from './Tabs.svelte';

describe('<Tabs />', function () {
  describe('with props', () => {
    const TEST_PROPS = {
      tabItems: [
        { id: 0, label: 'Easy' },
        { id: 1, label: 'Normal' },
        { id: 2, label: 'Hard' },
      ],
    };

    it('should render tabItems props as tabs', () => {
      const { getByText } = render(Tabs, { ...TEST_PROPS });

      TEST_PROPS.tabItems.forEach((tab) => {
        const renderedTab = getByText(tab.label);
        expect(renderedTab).toBeInTheDocument();
        expect(renderedTab).toHaveTextContent(tab.label);
      });
    });

    it('should set default selected tab to first tabItem', () => {
      const { getByText } = render(Tabs, { ...TEST_PROPS });

      const firstTab = TEST_PROPS.tabItems[0];
      const firstTabParent = getByText(firstTab.label).parentElement;
      expect(firstTabParent).toBeInTheDocument();

      expect(firstTabParent).toHaveClass('active');
      expect(firstTabParent).toHaveAttribute('role', 'tab');
      expect(firstTabParent).toHaveAttribute('aria-selected', 'true');
    });

    it('should set default selected tab to value of activeTabId prop', () => {
      const levels = [...TEST_PROPS.tabItems, { id: 3, label: 'Unbeatable' }];

      const { getByText } = render(Tabs, {
        tabItems: [...levels],
        activeTabId: 3,
      });

      const finalTab = levels[3];
      const finalTabParent = getByText(finalTab.label).parentElement;

      expect(finalTabParent).toBeInTheDocument();
      expect(finalTabParent).toHaveClass('active');
      expect(finalTabParent).toHaveAttribute('role', 'tab');
      expect(finalTabParent).toHaveAttribute('aria-selected', 'true');
    });

    it('should switch tabs when clicked', async () => {
      const { getByText } = render(Tabs, { ...TEST_PROPS });

      const lastTab = TEST_PROPS.tabItems[2];
      const lastTabParent = getByText(lastTab.label).parentElement;
      expect(lastTabParent).toBeInTheDocument();
      expect(lastTabParent).not.toHaveClass('active');
      expect(lastTabParent).not.toHaveAttribute('aria-selected', 'true');

      await fireEvent.click(getByText(lastTab.label));

      expect(lastTabParent).toHaveClass('active');
      expect(lastTabParent).toHaveAttribute('role', 'tab');
      expect(lastTabParent).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('with default props', () => {
    it('doe snot render tabs if not tabItems props is provided', () => {
      const { container } = render(Tabs, { tabItems: undefined });

      const tabsContainer = container.querySelector('.tabs-container');
      const tabElements = container.querySelector('li');

      expect(tabsContainer).toBeInTheDocument();
      expect(tabElements).not.toBeInTheDocument();
    });
  });
});
