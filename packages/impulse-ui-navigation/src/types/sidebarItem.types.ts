import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonRestProps } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';

interface SidebarItemProps<T = any> extends SidebarItemRestProps {
  iStyle?: Partial<SidebarItemStyle<T>>;
}

interface SidebarItemRestProps extends ButtonRestProps {
  active?: boolean;
  label: string;
  icon?: IconDefinition;
  isHeader?: boolean;
  collapsed?: boolean;
}

interface SidebarItemStyle<T> {
  buttonStyle: IOStyle<T>;
  iconStyle: IOStyle<T>;
}

export type { SidebarItemProps, SidebarItemRestProps, SidebarItemStyle };
