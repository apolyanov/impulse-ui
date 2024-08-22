import { MouseEvent, MouseEventHandler, useCallback, useState } from 'react';
import { SidebarRestProps } from '../types';

const useSidebar = (props: SidebarRestProps) => {
  const { items, ...containerProps } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = useCallback(() => setCollapsed((prevState) => !prevState), []);

  const handleHeaderClick = useCallback(
    (onClick?: MouseEventHandler<HTMLButtonElement>, isHeader?: boolean) => {
      return (event: MouseEvent<HTMLButtonElement>) => {
        isHeader && toggleCollapse();
        onClick?.(event);
      };
    },
    [toggleCollapse],
  );

  return {
    collapsed,
    toggleCollapse,
    handleHeaderClick,
    items,
    containerProps,
  };
};

export { useSidebar };
