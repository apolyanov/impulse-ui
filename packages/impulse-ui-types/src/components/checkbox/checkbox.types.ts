import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';

import { IconButtonStyle, IconButtonStyleProps } from '../buttons';
import { ContainerStyleProps } from '../layout';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';

interface CheckboxProps extends CompositeCheckboxProps {
  iStyle?: Partial<CheckboxStyle>;
  iProps?: Partial<CheckboxStyleProps>;
}

type CompositeCheckboxProps = CheckboxRestProps &
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof CheckboxRestProps>;

interface CheckboxRestProps {
  checked?: boolean;
  label?: string;
  onClick?: (onClickCheckboxEvent: OnClickCheckboxEvent) => void;
}

interface OnClickCheckboxEvent {
  event: MouseEvent<HTMLButtonElement>;
  value: boolean;
}

interface CheckboxStyle {
  mainContainerStyle: IOStyle<ContainerStyleProps, CheckboxRestProps>;
  iconButtonStyle: Partial<IconButtonStyle>;
  typographyStyle: IOStyle<TypographyStyleProps, CheckboxRestProps>;
}

interface CheckboxStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  iconButtonStyleProps: Partial<IconButtonStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

export type { CheckboxProps, CheckboxRestProps, CheckboxStyle, CheckboxStyleProps, CompositeCheckboxProps };
