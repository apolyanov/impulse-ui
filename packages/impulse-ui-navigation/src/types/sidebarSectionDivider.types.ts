import { IOStyle } from '@impulse-ui/core';
import { ContainerRestProps } from '@impulse-ui/layout';

interface SidebarSectionDividerProps extends SidebarSectionDividerRestProps {
  iStyle?: IOStyle<SidebarSectionDividerRestProps>;
}

interface SidebarSectionDividerRestProps extends ContainerRestProps {}

export type { SidebarSectionDividerProps };
