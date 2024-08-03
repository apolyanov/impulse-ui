import { IOStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';

interface SidebarSectionDividerProps {
  iStyle?: Partial<SidebarSectionDividerStyle>;
}

interface SidebarSectionDividerStyle {
  dividerStyle: IOStyle<ContainerHTMLProps>;
}

export type { SidebarSectionDividerProps, SidebarSectionDividerStyle };
