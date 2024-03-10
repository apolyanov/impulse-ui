import { HTMLAttributes } from 'react';

import { TextInputCompositeProps, TextInputStyle } from '../input';
import { IOStyle } from '../theme';

import { AutoCompleteItemStyle } from './autoCompleteItem.types';

type SimpleOptionValue = string | number | Object | Object[];

interface AutoCompleteProps extends AutoCompleteRestProps {
  iStyle?: Partial<AutoCompleteStyle>;
}

interface AutoCompleteRestProps<T extends object = any> extends HTMLAttributes<HTMLDivElement> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  options: SimpleOption[] | T[];
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

interface AutoCompleteStyle {
  mainContainerStyle: IOStyle<AutoCompleteRestProps>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<AutoCompleteRestProps>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<AutoCompleteRestProps>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps>;
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
