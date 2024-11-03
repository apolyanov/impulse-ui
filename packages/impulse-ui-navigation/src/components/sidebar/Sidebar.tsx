import { useStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { PropsWithChildren, useMemo } from 'react';

import { useSidebar } from '../../hooks/useSidebar.tsx';
import { defaultSidebarStyle } from '../../styles';
import { SidebarProps } from '../../types';
import { SidebarItem } from './sidebar-item';
import { SidebarSectionDivider } from './sidebard-section-divider';

const Sidebar = ({ iCss, iTheme, children, ...rest }: PropsWithChildren<SidebarProps>) => {
  const { items, handleHeaderClick, collapsed, containerProps } = useSidebar(rest);
  const iStyle = useStyle(rest, defaultSidebarStyle, iCss, iTheme);

  const sidebarItems = useMemo(() => {
    return items?.map((item, index) => {
      if ('isDivider' in item) {
        return <SidebarSectionDivider key={index} {...item} className='IMUI-SidebarSectionDivider-root' />;
      }

      return (
        <SidebarItem
          key={index}
          {...item}
          className='IMUI-SidebarItem-root'
          onClick={handleHeaderClick(item.onClick, item.isHeader)}
          collapsed={collapsed}
        />
      );
    });
  }, [items, handleHeaderClick, collapsed]);

  return (
    <Container iCss={iStyle?.iCss} iTheme={iStyle?.iTheme} {...containerProps} className='IMUI-Sidebar-root'>
      {sidebarItems}
      {children}
    </Container>
  );
};

export { Sidebar };
