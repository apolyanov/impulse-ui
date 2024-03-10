import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IOStyle } from '../theme';

interface SidebarHeaderProps extends SidebarHeaderRestProps {
  iStyle?: Partial<SidebarHeaderStyle>;
}

interface SidebarHeaderRestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  headerText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: IconDefinition;
}

interface SidebarHeaderStyle {
  buttonStyle: IOStyle;
  iconStyle: IOStyle;
  typographyStyle: IOStyle;
}

export type { SidebarHeaderProps, SidebarHeaderStyle };
