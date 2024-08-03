import { ReactNode } from 'react';

import { SidebarHeaderStyle } from './sidebarHeader.types';
import { SidebarItemStyle } from './sidebarItem.types';
import { IOStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';

interface SidebarProps {
  iStyle?: Partial<SidebarStyle>;
  children?: ReactNode;
}

interface SidebarStyle {
  containerStyle: IOStyle<ContainerHTMLProps>;
  headerStyle: Partial<SidebarHeaderStyle>;
  sectionDividerStyle: IOStyle<ContainerHTMLProps>;
  itemStyle: Partial<SidebarItemStyle>;
}

export type { SidebarProps, SidebarStyle };
