import { ReactNode } from 'react';

import { DividerStyleProps } from '../divider';
import { ContainerStyleProps } from '../layout';
import { IOProps, IOStyle } from '../theme';

import { SidebarHeaderStyle, SidebarHeaderStyleProps } from './sidebarHeader.types';
import { SidebarItemStyle, SidebarItemStyleProps } from './sidebarItem.types';

interface SidebarProps {
  iStyle?: Partial<SidebarStyle>;
  iProps?: Partial<SidebarStyleProps>;
  children?: ReactNode;
}

interface SidebarStyle {
  containerStyle: IOStyle<ContainerStyleProps>;
  headerStyle: Partial<SidebarHeaderStyle>;
  sectionDividerStyle: IOStyle<DividerStyleProps>;
  itemStyle: Partial<SidebarItemStyle>;
}

interface SidebarStyleProps {
  containerStyleProps: IOProps<ContainerStyleProps>;
  headerStyleProps: IOProps<SidebarHeaderStyleProps>;
  sectionDividerStyleProps: IOProps<DividerStyleProps>;
  itemStyleProps: IOProps<SidebarItemStyleProps>;
}

export type { SidebarProps, SidebarStyle, SidebarStyleProps };
