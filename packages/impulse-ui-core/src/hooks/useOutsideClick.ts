import { useCallback, useEffect } from 'react';
import { UseOutsideClickFn } from '../types';

const useOutsideClick: UseOutsideClickFn = (callback, htmlDeps) => {
  const isEventContained = useCallback(
    (event: MouseEvent) => {
      return htmlDeps?.every((htmlElement) => htmlElement && !htmlElement.contains(event.target as Node));
    },
    [htmlDeps],
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isEventContained(event)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick, true);

    return () => {
      window.removeEventListener('mousedown', handleClick, true);
    };
  }, [callback, isEventContained]);
};

export { useOutsideClick };
