import { VirtualItem } from '@tanstack/react-virtual';
import { CSSProperties } from 'react';
interface UseVirtualizedListOptions<T extends Element> {
    scrollElement: T | null;
    elementHeight: number;
    elementsCount: number;
    scrollIndex?: number;
    autoScroll?: boolean;
}
declare const useVirtualizedList: <T extends Element>(options: UseVirtualizedListOptions<T>) => {
    getVirtualItems: () => VirtualItem<Element>[];
    listContainerStyle: CSSProperties;
    listItemStyle: (virtualRow: VirtualItem<T>) => CSSProperties;
    scrollTo: (index: number) => void;
};
export { useVirtualizedList };
