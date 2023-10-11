import { HTMLAttributes } from 'react';

import { TextInputCompositeProps, TextInputStyle, TextInputStyleProps } from '../input';
import { ContainerStyleProps } from '../layout';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';

import { AutoCompleteItemStyle } from './autoCompleteItem.types';

type SimpleOptionValue = string | number | Object | Object[];

interface AutoCompleteProps extends AutoCompleteRestProps {
  iStyle?: Partial<AutoCompleteStyle>;
  iProps?: Partial<AutoCompleteStyleProps>;
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
  mainContainerStyle: IOStyle<ContainerStyleProps, AutoCompleteRestProps>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<ContainerStyleProps, AutoCompleteRestProps>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<TypographyStyleProps, AutoCompleteRestProps>;
  noOptionsTypographyStyle: IOStyle<TypographyStyleProps, AutoCompleteRestProps>;
}

interface AutoCompleteStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  textInputStyleProps: Partial<TextInputStyleProps>;
  autoCompleteItemsContainerStyleProps: IOProps<ContainerStyleProps>;
  autoCompleteItemStyleProps: Partial<AutoCompleteStyleProps>;
  loadingTypographyStyleProps: IOProps<TypographyStyleProps>;
  noOptionsTypographyStyleProps: IOProps<TypographyStyleProps>;
}

export type {
  AutoCompleteProps,
  AutoCompleteRestProps,
  AutoCompleteStyle,
  AutoCompleteStyleProps,
  ExtractSimpleOptionFn,
  FormatOptionTextFn,
  InnerSimpleOption,
  SimpleOption,
  SimpleOptionValue,
};
