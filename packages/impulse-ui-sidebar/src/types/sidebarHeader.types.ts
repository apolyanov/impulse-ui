import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { IOStyle } from '@impulse-ui/core';
import { ButtonHTMLProps } from '@impulse-ui/buttons';
import { IconHTMLProps } from '@impulse-ui/icon';
import { TypographyHTMLProps } from '@impulse-ui/text';

interface SidebarHeaderProps extends SidebarHeaderRestProps {
  iStyle?: Partial<SidebarHeaderStyle>;
}

interface SidebarHeaderRestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  headerText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: IconDefinition;
}

interface SidebarHeaderStyle {
  buttonStyle: IOStyle<ButtonHTMLProps>;
  iconStyle: IOStyle<IconHTMLProps>;
  typographyStyle: IOStyle<TypographyHTMLProps>;
}

export type { SidebarHeaderProps, SidebarHeaderStyle };
