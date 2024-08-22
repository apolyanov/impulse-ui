import { IOStyle } from '@impulse-ui/core';
import { ContainerCSSProps, ContainerHTMLProps } from '@impulse-ui/layout';
import { SidebarItemProps, SidebarItemStyle } from './sidebarItem.types';
import { SidebarSectionDividerProps } from './sidebarSectionDivider.types.ts';

interface SidebarProps extends SidebarRestProps {
  iStyle?: Partial<SidebarStyle>;
}

interface SidebarRestProps extends ContainerHTMLProps, ContainerCSSProps {
  items?: SidebarItems;
  collapsed?: boolean;
}

type SidebarItems = (
  | SidebarItemProps
  | (SidebarSectionDividerProps & {
      isDivider: true;
    })
)[];

interface SidebarStyle {
  containerStyle: IOStyle<SidebarRestProps>;
  sectionDividerStyle: IOStyle<SidebarRestProps>;
  itemStyle: Partial<SidebarItemStyle<SidebarRestProps>>;
}

export type { SidebarProps, SidebarStyle, SidebarItems, SidebarRestProps };
