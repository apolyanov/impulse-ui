import { DividerStyleProps } from '../divider';
import { IOProps, IOStyle } from '../theme';

interface SidebarSectionDividerProps {
  iStyle?: Partial<SidebarSectionDividerStyle>;
  iProps?: Partial<SidebarSectionDividerStyleProps>;
}

interface SidebarSectionDividerStyle {
  dividerStyle: IOStyle<DividerStyleProps>;
}

interface SidebarSectionDividerStyleProps {
  dividerStyleProps: IOProps<DividerStyleProps>;
}

export type { SidebarSectionDividerProps, SidebarSectionDividerStyle, SidebarSectionDividerStyleProps };
