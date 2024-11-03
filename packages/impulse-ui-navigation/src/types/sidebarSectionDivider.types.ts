import { IComponent } from '@impulse-ui/core';
import { ContainerRestProps } from '@impulse-ui/layout';

interface SidebarSectionDividerProps
  extends SidebarSectionDividerRestProps,
    IComponent<SidebarSectionDividerRestProps> {}

interface SidebarSectionDividerRestProps extends ContainerRestProps {}

export type { SidebarSectionDividerProps };
