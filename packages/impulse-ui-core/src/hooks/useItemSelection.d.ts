import { UseItemSelectionOptions } from '@impulse-ui/types';
declare const useItemSelection: <T>(items: T[], options?: Partial<UseItemSelectionOptions<T>>) => {
    getHighlightedItem: () => T | undefined;
    highlightNextIndex: () => number;
    getSelectedItemIndex: () => number;
    highlightPrevIndex: () => number;
    selectItem: (item?: T) => void;
    isItemSelected: (item: T) => boolean;
    resetSelection: () => void;
    updateHighlightedIndex: (newItems: T[], item?: T) => number;
    highlightedIndex: number;
    selectedItem: T | null;
    selectedItems: T[];
};
export { useItemSelection };
