import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonStyleProps } from '../buttons';
import { IconStyleProps } from '../icon';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';
interface SidebarHeaderProps extends SidebarHeaderRestProps {
  iStyle?: Partial<SidebarHeaderStyle>;
  iProps?: Partial<SidebarHeaderStyleProps>;
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

interface SidebarHeaderStyleProps {
  buttonStyleProps: IOProps<ButtonStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

interface UseSidebarHeaderStyleFn {
  (
    rest: SidebarHeaderRestProps,
    iStyle?: Partial<SidebarHeaderStyle>,
    iProps?: Partial<SidebarHeaderStyleProps>,
  ): Partial<UseSidebarHeaderStyleFnProps>;
}

interface UseSidebarHeaderStyleFnProps {
  buttonStyle: IOStyle;
  iconStyle: IOStyle;
  typographyStyle: IOStyle;
  buttonStyleProps: IOProps<ButtonStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

export type {
  SidebarHeaderProps,
  SidebarHeaderStyle,
  SidebarHeaderStyleProps,
  UseSidebarHeaderStyleFn,
  UseSidebarHeaderStyleFnProps,
};
