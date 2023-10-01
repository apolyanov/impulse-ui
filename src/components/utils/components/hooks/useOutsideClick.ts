import { useEffect } from 'react';

import { UseOutsideClickFn } from '../types';

const useOutsideClick: UseOutsideClickFn = (callback, htmlDeps) => {
  useEffect(() => {
    const isEventContained = (event: MouseEvent) => {
      return htmlDeps?.every((htmlElement) => htmlElement && !htmlElement.contains(event.target as Node));
    };

    const handleClick = (event: MouseEvent) => {
      if (isEventContained(event)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick, true);

    return () => {
      window.removeEventListener('mousedown', handleClick, true);
    };
  }, [callback, htmlDeps]);
};

export { useOutsideClick };
