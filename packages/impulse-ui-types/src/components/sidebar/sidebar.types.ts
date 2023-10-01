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
  sidebarContainerStyle: IOStyle;
  sidebarHeaderStyle: Partial<SidebarHeaderStyle>;
  sidebarDividerStyle: IOStyle;
  sidebarItemStyle: Partial<SidebarItemStyle>;
}

interface SidebarStyleProps {
  sidebarContainerStyleProps: IOProps<ContainerStyleProps>;
  sidebarHeaderStyleProps: IOProps<SidebarHeaderStyleProps>;
  sidebarDividerStyleProps: IOProps<DividerStyleProps>;
  sidebarItemStyleProps: IOProps<SidebarItemStyleProps>;
}

interface UseSidebarStyleFn {
  (iStyle?: IOStyle, iProps?: IOProps<ContainerStyleProps>): Partial<UseSidebarStyleFnProps>;
}

interface UseSidebarStyleFnProps {
  containerStyle: IOStyle;
  containerStyleProps: IOProps<ContainerStyleProps>;
}

export type { SidebarProps, SidebarStyle, SidebarStyleProps, UseSidebarStyleFn, UseSidebarStyleFnProps };
