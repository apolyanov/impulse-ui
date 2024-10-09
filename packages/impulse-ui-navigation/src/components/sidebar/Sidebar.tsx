import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

import { useSidebar } from '../../hooks/useSidebar.tsx';
import { sidebarComponentMap } from '../../maps';
import { defaultSidebarStyle } from '../../styles';
import { SidebarProps } from '../../types';
import { SidebarItem } from './sidebar-item';
import { SidebarSectionDivider } from './sidebard-section-divider';

const Sidebar: FunctionComponent<PropsWithChildren<SidebarProps>> = ({ iStyle, children, ...rest }) => {
  const { items, handleHeaderClick, collapsed, containerProps } = useSidebar(rest);

  const { containerStyle, sectionDividerStyle, itemStyle } = useComponentStyle(
    sidebarComponentMap,
    { ...rest, collapsed },
    defaultSidebarStyle,
    iStyle,
  );

  const sidebarItems = useMemo(() => {
    return items?.map((item, index) => {
      if ('isDivider' in item) {
        return <SidebarSectionDivider key={index} iStyle={sectionDividerStyle} {...item} />;
      }

      return (
        <SidebarItem
          key={index}
          iStyle={itemStyle}
          {...item}
          onClick={handleHeaderClick(item.onClick, item.isHeader)}
          collapsed={collapsed}
        />
      );
    });
  }, [items, sectionDividerStyle, itemStyle, handleHeaderClick, collapsed]);

  return (
    <Container iCss={containerStyle.iCss} iTheme={containerStyle.iTheme} {...containerProps}>
      {sidebarItems}
      {children}
    </Container>
  );
};

export { Sidebar };
