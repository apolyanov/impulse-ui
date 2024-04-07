import { HTMLAttributes } from 'react';

import { TextInputCompositeProps, TextInputStyle } from '../input';
import { IOStyle } from '../theme';
import { TypeEquality } from '../utils';

import { AutoCompleteItemStyle } from './autoCompleteItem.types';

type SimpleOptionValue = string | number | Object | Object[];

interface AutoCompleteProps<T> extends AutoCompleteRestProps<T> {
  iStyle?: Partial<AutoCompleteStyle<T>>;
}

interface AutoCompleteRestProps<T> extends HTMLAttributes<HTMLDivElement> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  options: TypeEquality<T, SimpleOption> extends true ? SimpleOption[] : T[];
  extractSimpleOptionValue?: ExtractSimpleOptionFn<T>;
  formatOptionText?: FormatOptionTextFn<T>;
  inputProps?: TextInputCompositeProps;
  onOptionSelect?: (optionValue: SimpleOptionValue | null) => void;
}

interface FormatOptionTextFn<T> {
  (option: T): string | number;
}

interface ExtractSimpleOptionFn<T> {
  (option: T): SimpleOptionValue;
}

interface SimpleOption {
  value: SimpleOptionValue;
  label: string | number;
}

interface InnerSimpleOption extends SimpleOption {
  uuid: number;
}

interface AutoCompleteStyle<T = object> {
  mainContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
}

export type {
  AutoCompleteProps,
  AutoCompleteRestProps,
  AutoCompleteStyle,
  ExtractSimpleOptionFn,
  FormatOptionTextFn,
  InnerSimpleOption,
  SimpleOption,
  SimpleOptionValue,
};
