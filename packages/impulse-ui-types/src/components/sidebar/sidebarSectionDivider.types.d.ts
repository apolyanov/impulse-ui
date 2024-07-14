import { ContainerHTMLProps } from '../layout';
import { IOStyle } from '../theme';
interface SidebarSectionDividerProps {
    iStyle?: Partial<SidebarSectionDividerStyle>;
}
interface SidebarSectionDividerStyle {
    dividerStyle: IOStyle<ContainerHTMLProps>;
}
export type { SidebarSectionDividerProps, SidebarSectionDividerStyle };
