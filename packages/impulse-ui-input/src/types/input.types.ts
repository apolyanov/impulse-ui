import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { FieldMessageStyle } from '@impulse-ui/text';
import { ChangeEvent, JSX, RefObject } from 'react';

type InputHTMLProps = JSX.IntrinsicElements['input'];

interface TextInputProps<T = any> extends TextInputCompositeProps {
  iStyle?: Partial<TextInputStyle<T>>;
}

type TextInputCompositeProps = TextInputRestProps & Omit<InputHTMLProps, keyof TextInputRestProps>;

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

interface TextInputStyle<T> {
  mainContainerStyle: IOStyle<TextInputRestProps & T>;
  inputContainerStyle: IOStyle<TextInputRestProps & T>;
  iconStyle: IOStyle<TextInputRestProps & T>;
  clearIconStyle: Partial<IconButtonStyle & T>;
  inputStyle: IOStyle<TextInputRestProps & T>;
  fieldMessageStyle: FieldMessageStyle;
}

export type { InputHTMLProps, TextInputCompositeProps, TextInputProps, TextInputRestProps, TextInputStyle };
