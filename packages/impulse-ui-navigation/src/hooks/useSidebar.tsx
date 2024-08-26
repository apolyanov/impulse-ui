import { MouseEvent, MouseEventHandler, useCallback, useState } from 'react';
import { SidebarRestProps } from '../types';

const useSidebar = (props: SidebarRestProps) => {
  const { items, canCollapse, ...containerProps } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = useCallback(() => setCollapsed((prevState) => !prevState), []);

  const handleHeaderClick = useCallback(
    (onClick?: MouseEventHandler<HTMLButtonElement>, isHeader?: boolean) => {
      return (event: MouseEvent<HTMLButtonElement>) => {
        canCollapse && isHeader && toggleCollapse();
        onClick?.(event);
      };
    },
    [toggleCollapse, canCollapse],
  );

  return {
    collapsed,
    toggleCollapse,
    handleHeaderClick,
    items,
    canCollapse,
    containerProps,
  };
};

export { useSidebar };
