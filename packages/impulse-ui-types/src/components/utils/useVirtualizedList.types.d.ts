import { VirtualItem } from '@tanstack/react-virtual';
import { CSSProperties } from 'react';
type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';
type ScrollBehavior = 'auto' | 'smooth';
interface ScrollToOptions {
    align?: ScrollAlignment;
    behavior?: ScrollBehavior;
}
interface ScrollToFn {
    (index: number, options?: ScrollToOptions): void;
}
interface ListItemStyleFn<T extends Element> {
    (virtualRow: VirtualItem<T>): CSSProperties;
}
interface UserVirtualizedListFnProps<T extends Element> {
    getVirtualItems: () => VirtualItem<T>[];
    listContainerStyle: CSSProperties;
    listItemStyle: ListItemStyleFn<T>;
    scrollToIndex: ScrollToFn;
}
interface UseVirtualizedListFn {
    <T extends Element>(scrollElement: T | null, elementHeight: number, elementsCount: number): UserVirtualizedListFnProps<T>;
}
export type { ListItemStyleFn, ScrollAlignment, ScrollBehavior, ScrollToFn, ScrollToOptions, UserVirtualizedListFnProps, UseVirtualizedListFn, };
