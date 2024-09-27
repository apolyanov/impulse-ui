import { VirtualItem, useVirtualizer } from '@tanstack/react-virtual';
import { CSSProperties, useCallback, useLayoutEffect } from 'react';

interface UseVirtualizedListOptions<T extends Element> {
  scrollElement: T | null;
  elementHeight: number;
  elementsCount: number;
  scrollIndex?: number;
  autoScroll?: boolean;
}

const useVirtualizedList = <T extends Element>(options: UseVirtualizedListOptions<T>) => {
  const { scrollElement, elementsCount, elementHeight, scrollIndex, autoScroll } = options;

  const { getTotalSize, getVirtualItems, scrollToIndex } = useVirtualizer({
    count: elementsCount,
    getScrollElement: () => scrollElement,
    estimateSize: () => elementHeight,
    overscan: 5,
  });

  const listContainerStyle: CSSProperties = {
    height: `${getTotalSize()}px`,
    width: '100%',
    position: 'relative',
  };

  const listItemStyle = (virtualRow: VirtualItem): CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: `${virtualRow.size}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transform: `translateY(${virtualRow.start}px)`,
  });

  const scrollTo = useCallback(
    (index: number) => {
      if (scrollToIndex && elementsCount > 0) {
        scrollToIndex(index);
      }
    },
    [elementsCount, scrollToIndex],
  );

  useLayoutEffect(() => {
    if (autoScroll && scrollElement && scrollIndex !== undefined) {
      scrollTo(scrollIndex);
    }
  }, [scrollIndex, scrollTo, scrollElement, autoScroll]);

  return { getVirtualItems, listContainerStyle, listItemStyle, scrollTo };
};

export { useVirtualizedList };
