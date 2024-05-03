'use client';
import { useCallback, useMemo, useState } from 'react';
import { UseItemSelectionOptions } from '@impulse-ui/types';

const defaultOptions: UseItemSelectionOptions<any> = {
  getItemId: (item: any) => item.id,
};

const useItemSelection = <T>(items: T[], options?: Partial<UseItemSelectionOptions<T>>) => {
  const { getItemId, multiple } = useMemo(() => ({ ...defaultOptions, ...options }), [options]);

  const [selectedItems, setSelectedItems] = useState<T[]>([]);
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

  const isItemSelected = useCallback(
    (item: T) => {
      if (multiple) {
        if (selectedItems.length > 0) return true;

        return selectedItems.some((selectedItem) => getItemId(selectedItem) === getItemId(item));
      }

      if (selectedItem) return getItemId(item) === getItemId(selectedItem);

      return false;
    },
    [getItemId, multiple, selectedItem, selectedItems],
  );

  const selectSingleItem = useCallback(
    (item: T) => {
      if (!selectedItem) {
        setSelectedItem(item);
      } else {
        if (selectedItem && getItemId(item) !== getItemId(selectedItem)) {
          setSelectedItem(item);
        }
      }
    },
    [getItemId, selectedItem],
  );

  const selectMultipleItems = useCallback(
    (item: T) => {
      if (isItemSelected(item)) {
        const newSelectedItems = selectedItems.filter((selectedItem) => getItemId(selectedItem) !== getItemId(item));

        setSelectedItems(newSelectedItems);
      } else {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);
      }
    },
    [getItemId, isItemSelected, selectedItems],
  );

  const selectItem = useCallback(
    (item?: T) => {
      const newItem = item ?? items.at(highlightedIndex);

      if (newItem) {
        if (multiple) {
          selectMultipleItems(newItem);
        } else {
          selectSingleItem(newItem);
        }
      }
    },
    [highlightedIndex, items, multiple, selectMultipleItems, selectSingleItem],
  );

  const getHighlightedItem = () => {
    return items.at(highlightedIndex);
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
    setSelectedItems([]);
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
    selectedItems,
  };
};

export { useItemSelection };
