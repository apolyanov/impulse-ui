import { ScrollToFn } from './useVirtualizedList.types';

interface UseItemSelectionOptions<T> {
  getItemId: (item: T) => string | number;
  scrollToFn?: ScrollToFn;
  multiple?: boolean;
}

export type { UseItemSelectionOptions };
