import { IComponent } from '@impulse-ui/core';
import { ContainerRestProps } from '@impulse-ui/layout';
import { SidebarItemProps } from './sidebarItem.types';
import { SidebarSectionDividerProps } from './sidebarSectionDivider.types.ts';

interface SidebarProps extends SidebarRestProps, IComponent<SidebarRestProps> {}

interface SidebarRestProps extends ContainerRestProps {
  items?: SidebarItems;
  collapsed?: boolean;
  canCollapse?: boolean;
}

type SidebarItems = (
  | SidebarItemProps
  | (SidebarSectionDividerProps & {
      isDivider: true;
    })
)[];

export type { SidebarProps, SidebarItems, SidebarRestProps };
