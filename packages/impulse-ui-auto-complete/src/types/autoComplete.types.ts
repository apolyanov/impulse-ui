import { ContainerProps } from '@impulse-ui/layout';
import { IComponent, IOStyle, SimpleOption, UseProcessedoptionsProps } from '@impulse-ui/core';
import { TextInputCompositeProps, TextInputStyle } from '@impulse-ui/input';
import { AutoCompleteItemStyle } from './autoCompleteItem.types.ts';

interface AutoCompleteProps<T> extends AutoCompleteRestProps<T> {
  iStyle?: Partial<AutoCompleteStyle<T>>;
}

interface AutoCompleteRestProps<T> extends Omit<ContainerProps, keyof IComponent>, UseProcessedoptionsProps<T> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  inputProps?: TextInputCompositeProps;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
}

interface AutoCompleteStyle<T> {
  mainContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  textInputStyle: Partial<TextInputStyle<T>>;
  autoCompleteItemsContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingSpinnerStyle: IOStyle<AutoCompleteRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
}

export type { AutoCompleteProps, AutoCompleteRestProps, AutoCompleteStyle };
