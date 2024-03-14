import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, RefObject } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IconButtonStyle } from '../buttons';
import { FieldMessageStyle } from '../text';
import { IOStyle } from '../theme';

interface TextInputProps extends TextInputCompositeProps {
  iStyle?: Partial<TextInputStyle>;
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
  mainContainerStyle: IOStyle<TextInputRestProps>;
  inputContainerStyle: IOStyle<TextInputRestProps>;
  iconStyle: IOStyle<TextInputRestProps>;
  clearIconStyle: Partial<IconButtonStyle>;
  inputStyle: IOStyle<TextInputRestProps>;
  fieldMessageStyle: FieldMessageStyle;
}

export type { TextInputCompositeProps, TextInputProps, TextInputRestProps, TextInputStyle };
