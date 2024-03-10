import { IOStyle } from '../theme';

interface SidebarSectionDividerProps {
  iStyle?: Partial<SidebarSectionDividerStyle>;
}

interface SidebarSectionDividerStyle {
  dividerStyle: IOStyle;
}

export type { SidebarSectionDividerProps, SidebarSectionDividerStyle };
