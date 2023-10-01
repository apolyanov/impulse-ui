import { DividerStyleProps } from '../divider';
import { IOProps, IOStyle } from '../theme';

interface SidebarSectionDividerProps {
  iStyle?: IOStyle;
  iProps?: IOProps<DividerStyleProps>;
}

interface UseSidebarSectionDividerFn {
  (iStyle?: IOStyle, iProps?: IOProps<DividerStyleProps>): Partial<UseSidebarSectionDividerFnProps>;
}

interface UseSidebarSectionDividerFnProps {
  dividerStyle: IOStyle;
  dividerStyleProps: IOProps<DividerStyleProps>;
}

export type { SidebarSectionDividerProps, UseSidebarSectionDividerFn, UseSidebarSectionDividerFnProps };
