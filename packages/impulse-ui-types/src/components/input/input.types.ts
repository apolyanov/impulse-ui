import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefObject } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IconButtonStyle, IconButtonStyleProps } from '../buttons';
import { IconStyleProps } from '../icon';
import { ContainerStyleProps } from '../layout';
import { FieldMessageStyle, FieldMessageStyleProps } from '../text';
import { ComponentStyleProps, IOProps, IOStyle } from '../theme';

type InputStyleProps = ComponentStyleProps;
type InputValue = InputHTMLAttributes<HTMLInputElement>['value'];

type InputType = 'text' | 'password' | 'email' | 'number';

interface TextInputProps extends TextInputCompositeProps {
  iStyle?: Partial<TextInputStyle>;
  iProps?: Partial<TextInputStyleProps>;
}

type TextInputCompositeProps = TextInputRestProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof TextInputRestProps>;

interface TextInputRestProps {
  pattern?: string;
  debounced?: boolean;
  onDebouncedChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  debounceDelay?: number;
  clearable?: boolean;
  onClear?: () => void;
  icon?: IconDefinition;
  ref?: RefObject<HTMLInputElement>;
  clearIcon?: IconDefinition;
  isClearIconFocusable?: boolean;
  error?: boolean;
  errorMessage?: string;
}

interface TextInputStyle {
  mainContainerStyle: IOStyle<ContainerStyleProps, TextInputRestProps>;
  inputContainerStyle: IOStyle<ContainerStyleProps, TextInputRestProps>;
  iconStyle: IOStyle<IconStyleProps, TextInputRestProps>;
  clearIconStyle: Partial<IconButtonStyle>;
  inputStyle: IOStyle<InputStyleProps, TextInputRestProps>;
  fieldMessageStyle: FieldMessageStyle;
}

interface TextInputStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  inputContainerStyleProps: IOProps<ContainerStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
  clearIconStyleProps: Partial<IconButtonStyleProps>;
  inputStyleProps: IOProps<InputStyleProps>;
  fieldMessageStyleProps: FieldMessageStyleProps;
}

interface HandleInputFn {
  (value: ChangeEvent<HTMLInputElement>): void;
}

type UseTextInputStyleFnProps = TextInputStyle & TextInputStyleProps;

interface UseTextInputStyleFn {
  (
    rest: TextInputRestProps,
    iStyle?: Partial<TextInputStyle>,
    iProps?: Partial<TextInputStyleProps>,
  ): Partial<UseTextInputStyleFnProps>;
}

export type {
  HandleInputFn,
  InputStyleProps,
  InputType,
  InputValue,
  TextInputCompositeProps,
  TextInputProps,
  TextInputRestProps,
  TextInputStyle,
  TextInputStyleProps,
  UseTextInputStyleFn,
  UseTextInputStyleFnProps,
};
