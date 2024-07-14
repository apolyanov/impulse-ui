import { ScrollToFn } from './useVirtualizedList.types';
interface UseItemSelectionOptions<T> {
    getItemId: (item: T) => string | number | undefined;
    scrollToFn?: ScrollToFn;
    multiple?: boolean;
}
export type { UseItemSelectionOptions };
