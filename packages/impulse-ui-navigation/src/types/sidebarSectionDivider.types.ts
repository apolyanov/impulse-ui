import { IOStyle } from '@impulse-ui/core';
import { ContainerHTMLProps, ContainerProps } from '@impulse-ui/layout';

interface SidebarSectionDividerProps extends SidebarSectionDividerRestProps {
  iStyle?: IOStyle<SidebarSectionDividerRestProps>;
}

interface SidebarSectionDividerRestProps extends ContainerProps, ContainerHTMLProps {}

export type { SidebarSectionDividerProps };
