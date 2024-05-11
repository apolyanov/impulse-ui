import { ReactNode } from 'react';

import { ContainerHTMLProps } from '../layout';
import { IOStyle } from '../theme';

import { SidebarHeaderStyle } from './sidebarHeader.types';
import { SidebarItemStyle } from './sidebarItem.types';

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
