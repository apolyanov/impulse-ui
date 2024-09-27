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

interface ListItemStyleFn {
  (virtualRow: VirtualItem): CSSProperties;
}

interface UserVirtualizedListFnProps {
  getVirtualItems: () => VirtualItem[];
  listContainerStyle: CSSProperties;
  listItemStyle: ListItemStyleFn;
  scrollToIndex: ScrollToFn;
}

interface UseVirtualizedListFn {
  <T extends Element>(
    scrollElement: T | null,
    elementHeight: number,
    elementsCount: number,
  ): UserVirtualizedListFnProps;
}

export type {
  ListItemStyleFn,
  ScrollAlignment,
  ScrollBehavior,
  ScrollToFn,
  ScrollToOptions,
  UserVirtualizedListFnProps,
  UseVirtualizedListFn,
};
