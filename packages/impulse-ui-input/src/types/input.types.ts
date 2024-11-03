import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, ComponentPropsWithoutRef, RefObject } from 'react';
import { IComponent } from '@impulse-ui/core';

type InputHTMLProps = ComponentPropsWithoutRef<'input'>;

interface TextInputProps extends TextInputCompositeProps, IComponent<TextInputCompositeProps> {}

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

export type { InputHTMLProps, TextInputCompositeProps, TextInputProps, TextInputRestProps };
