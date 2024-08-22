import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';

interface CheckboxProps extends CompositeCheckboxProps {
  iStyle?: Partial<CheckboxStyle>;
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
  mainContainerStyle: IOStyle<CheckboxRestProps>;
  iconButtonStyle: Partial<IconButtonStyle>;
  typographyStyle: IOStyle<CheckboxRestProps>;
}

export type { CheckboxProps, CheckboxRestProps, CheckboxStyle, CompositeCheckboxProps };
