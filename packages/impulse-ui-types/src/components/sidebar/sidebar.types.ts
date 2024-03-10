import { ReactNode } from 'react';

import { IOStyle } from '../theme';

import { SidebarHeaderStyle } from './sidebarHeader.types';
import { SidebarItemStyle } from './sidebarItem.types';

interface SidebarProps {
  iStyle?: Partial<SidebarStyle>;
  children?: ReactNode;
}

interface SidebarStyle {
  containerStyle: IOStyle;
  headerStyle: Partial<SidebarHeaderStyle>;
  sectionDividerStyle: IOStyle;
  itemStyle: Partial<SidebarItemStyle>;
}

export type { SidebarProps, SidebarStyle };
