import { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IconStyleProps } from '../icon';
import { IOProps, IOStyle } from '../theme';

import { ButtonStyleProps } from './button.types';

interface IconButtonProps extends IconButtonRestProps, ButtonHTMLAttributes<HTMLButtonElement> {
  iStyle?: Partial<IconButtonStyle>;
  iProps?: Partial<IconButtonStyleProps>;
}

interface IconButtonRestProps {
  icon: IconDefinition;
}

interface UseIconButtonStyleFn {
  <T>(
    rest: T,
    iStyle?: Partial<IconButtonStyle>,
    iProps?: Partial<IconButtonStyleProps>,
    iDefaultStyle?: Partial<IconButtonStyle>,
    iDefaultProps?: Partial<IconButtonStyleProps>,
  ): Partial<UseIconButtonStyleFnProps>;
}

interface UseIconButtonStyleFnProps {
  iconButtonStyle: Partial<IconButtonStyle>;
  iconButtonStyleProps: Partial<IconButtonStyleProps>;
}

interface IconButtonStyle<T = IconButtonRestProps> {
  buttonStyle: IOStyle<ButtonStyleProps, T>;
  iconStyle: IOStyle<IconStyleProps, T>;
}

interface IconButtonStyleProps {
  buttonStyleProps: IOProps<ButtonStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
}

export type { IconButtonProps, IconButtonStyle, IconButtonStyleProps, UseIconButtonStyleFn, UseIconButtonStyleFnProps };
