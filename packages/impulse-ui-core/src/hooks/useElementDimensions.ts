import { UseElementDimensionsFn } from '../types';
import { useEffect, useState } from 'react';

const useElementDimensions: UseElementDimensionsFn = (element) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      if (element) {
        if (element.offsetWidth !== width) {
          setWidth(element.offsetWidth);
        }
        if (element.offsetHeight !== height) {
          setHeight(element?.offsetHeight);
        }
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [element, height, width]);

  return { width, height };
};

export { useElementDimensions };
