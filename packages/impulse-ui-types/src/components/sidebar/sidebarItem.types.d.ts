import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLProps } from '../buttons';
import { IconHTMLProps } from '../icon';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
interface SidebarItemProps extends SidebarItemRestProps, ButtonHTMLProps {
    iStyle?: Partial<SidebarItemStyle>;
}
interface SidebarItemRestProps {
    active?: boolean;
    itemText: string;
    icon?: IconDefinition;
}
interface SidebarItemStyle {
    buttonStyle: IOStyle<SidebarItemRestProps & ButtonHTMLProps>;
    iconStyle: IOStyle<SidebarItemRestProps & IconHTMLProps>;
    typographyStyle: IOStyle<SidebarItemRestProps & TypographyHTMLProps>;
}
export type { SidebarItemProps, SidebarItemRestProps, SidebarItemStyle };
