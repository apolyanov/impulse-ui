import { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IOStyle } from '../theme';

interface SidebarItemProps extends SidebarItemRestProps {
  iStyle?: Partial<SidebarItemStyle>;
}

interface SidebarItemStyle {
  buttonStyle: IOStyle;
  iconStyle: IOStyle;
  typographyStyle: IOStyle;
}

interface SidebarItemRestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  itemText: string;
  icon?: IconDefinition;
}

export type { SidebarItemProps, SidebarItemRestProps, SidebarItemStyle };
