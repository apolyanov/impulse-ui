import { useCallback, useState } from 'react';
import { ScrollToFn } from '@impulse-ui/types';

const defaultOptions: UseItemSelectionOptions<any> = {
  getItemId: (item: any) => item.id,
};

interface UseItemSelectionOptions<T> {
  getItemId: (item: T) => string | number;
  scrollToFn?: ScrollToFn;
}

const useItemSelection = <T>(items: T[], options?: Partial<UseItemSelectionOptions<T>>) => {
  const { getItemId } = { ...defaultOptions, ...options };

  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const highlightNextIndex = (): number => {
    const newHighlightedIndex = highlightedIndex === items.length - 1 ? 0 : highlightedIndex + 1;

    setHighlightedIndex(newHighlightedIndex);

    return newHighlightedIndex;
  };

  const highlightPrevIndex = (): number => {
    const newHighlightedIndex =
      highlightedIndex === 0 || highlightedIndex === -1 ? items.length - 1 : highlightedIndex - 1;

    setHighlightedIndex(newHighlightedIndex);

    return newHighlightedIndex;
  };

  const isItemSelected = (item: T) => {
    if (selectedItem) {
      return getItemId(item) === getItemId(selectedItem);
    }
    return false;
  };

  const selectItem = (item?: T) => {
    const newItem = item ?? items.at(highlightedIndex);

    if (!selectedItem && newItem) {
      setSelectedItem(newItem);
    } else {
      if (newItem && selectedItem && getItemId(newItem) !== getItemId(selectedItem)) {
        setSelectedItem(newItem);
      }
    }
  };

  const getHighlightedItem = () => {
    return items[highlightedIndex];
  };

  const updateHighlightedIndex = useCallback(
    (newItems: T[], item?: T): number => {
      const itemToSearch = item ?? selectedItem;
      const newIndex = newItems.findIndex((innerItem) => {
        if (itemToSearch) {
          return getItemId(innerItem) === getItemId(itemToSearch);
        }

        return false;
      });

      setHighlightedIndex(newIndex);

      return newIndex;
    },
    [getItemId, selectedItem],
  );

  const getSelectedItemIndex = () => {
    return items.findIndex((innerItem) => {
      if (selectedItem) {
        return getItemId(innerItem) === getItemId(selectedItem);
      }

      return false;
    });
  };

  const resetSelection = useCallback(() => {
    setSelectedItem(null);
    setHighlightedIndex(-1);
  }, []);

  return {
    getHighlightedItem,
    highlightNextIndex,
    getSelectedItemIndex,
    highlightPrevIndex,
    selectItem,
    isItemSelected,
    resetSelection,
    updateHighlightedIndex,
    highlightedIndex,
    selectedItem,
  };
};

export { useItemSelection };
