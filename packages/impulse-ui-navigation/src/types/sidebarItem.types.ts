import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonRestProps } from '@impulse-ui/buttons';
import { IComponent } from '@impulse-ui/core';

interface SidebarItemProps extends SidebarItemRestProps, IComponent<SidebarItemRestProps> {}

interface SidebarItemRestProps extends ButtonRestProps {
  active?: boolean;
  label: string;
  icon?: IconDefinition;
  isHeader?: boolean;
  collapsed?: boolean;
}

export type { SidebarItemProps, SidebarItemRestProps };
