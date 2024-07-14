import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, JSX, RefObject } from 'react';
import { IconButtonStyle } from '../buttons';
import { FieldMessageStyle } from '../text';
import { IOStyle } from '../theme';
type InputHTMLProps = JSX.IntrinsicElements['input'];
interface TextInputProps extends TextInputCompositeProps {
    iStyle?: Partial<TextInputStyle>;
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
interface TextInputStyle<T = {}> {
    mainContainerStyle: IOStyle<TextInputRestProps & T>;
    inputContainerStyle: IOStyle<TextInputRestProps & T>;
    iconStyle: IOStyle<TextInputRestProps & T>;
    clearIconStyle: Partial<IconButtonStyle & T>;
    inputStyle: IOStyle<TextInputRestProps & T>;
    fieldMessageStyle: FieldMessageStyle;
}
export type { InputHTMLProps, TextInputCompositeProps, TextInputProps, TextInputRestProps, TextInputStyle };
