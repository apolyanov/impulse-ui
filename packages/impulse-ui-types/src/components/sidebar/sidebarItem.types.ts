import { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonStyleProps } from '../buttons';
import { IconStyleProps } from '../icon';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';

interface SidebarItemProps extends SidebarItemRestProps {
  iStyle?: Partial<SidebarItemStyle>;
  iProps?: Partial<SidebarItemStyleProps>;
}

interface SidebarItemStyle {
  buttonStyle: IOStyle;
  iconStyle: IOStyle;
  typographyStyle: IOStyle;
}

interface SidebarItemStyleProps {
  buttonStyleProps: IOProps<ButtonStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

interface SidebarItemRestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  itemText: string;
  icon?: IconDefinition;
}

interface UseSidebarItemStyleFn {
  (
    rest: SidebarItemRestProps,
    iStyle?: Partial<SidebarItemStyle>,
    iProps?: Partial<SidebarItemStyleProps>,
  ): Partial<UseSidebarItemStyleFnProps>;
}

interface UseSidebarItemStyleFnProps {
  buttonStyle: IOStyle;
  iconStyle: IOStyle;
  typographyStyle: IOStyle;
  buttonStyleProps: IOProps<CombinedButtonStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

interface MergeSidebarItemButtonStylePropsFn {
  (rest: SidebarItemRestProps, buttonStyleProps?: IOProps<ButtonStyleProps>): CombinedButtonStyleProps;
}

type CombinedButtonStyleProps = IOProps<ButtonStyleProps & SidebarItemStyleProps>;

export type {
  MergeSidebarItemButtonStylePropsFn,
  SidebarItemProps,
  SidebarItemRestProps,
  SidebarItemStyle,
  SidebarItemStyleProps,
  UseSidebarItemStyleFn,
  UseSidebarItemStyleFnProps,
};
