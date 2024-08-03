import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLProps } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { IconHTMLProps } from '@impulse-ui/icon';
import { TypographyHTMLProps } from '@impulse-ui/text';

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
