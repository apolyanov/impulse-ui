import { HTMLAttributes } from 'react';

import { TextInputCompositeProps, TextInputStyle, TextInputStyleProps } from '../input';
import { ContainerStyleProps } from '../layout';
import { TypographyStyleProps } from '../text';
import { IOProps, IOStyle } from '../theme';

import { BasicAutoCompleteItemStyle } from './basicAutoCompleteItem.types';

type SimpleOptionValue = string | number | Object | Object[];

interface BasicAutoCompleteProps extends BasicAutoCompleteRestProps {
  iStyle?: Partial<BasicAutoCompleteStyle>;
  iProps?: Partial<BasicAutoCompleteStyleProps>;
}

interface BasicAutoCompleteRestProps<T extends object = any> extends HTMLAttributes<HTMLDivElement> {
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

interface BasicAutoCompleteStyle {
  mainContainerStyle: IOStyle<ContainerStyleProps, BasicAutoCompleteRestProps>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<ContainerStyleProps, BasicAutoCompleteRestProps>;
  autoCompleteItemStyle: Partial<BasicAutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<TypographyStyleProps, BasicAutoCompleteRestProps>;
  noOptionsTypographyStyle: IOStyle<TypographyStyleProps, BasicAutoCompleteRestProps>;
}

interface BasicAutoCompleteStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  textInputStyleProps: Partial<TextInputStyleProps>;
  autoCompleteItemsContainerStyleProps: IOProps<ContainerStyleProps>;
  autoCompleteItemStyleProps: Partial<BasicAutoCompleteStyleProps>;
  loadingTypographyStyleProps: IOProps<TypographyStyleProps>;
  noOptionsTypographyStyleProps: IOProps<TypographyStyleProps>;
}

type UseBasicAutoCompleteStyleFnProps = Partial<BasicAutoCompleteStyle & BasicAutoCompleteStyleProps>;

interface UseBasicAutoCompleteStyleFn {
  (
    rest: BasicAutoCompleteRestProps,
    iStyle?: Partial<BasicAutoCompleteStyle>,
    iProps?: Partial<BasicAutoCompleteStyleProps>,
  ): UseBasicAutoCompleteStyleFnProps;
}

export type {
  BasicAutoCompleteProps,
  BasicAutoCompleteRestProps,
  BasicAutoCompleteStyle,
  BasicAutoCompleteStyleProps,
  ExtractSimpleOptionFn,
  FormatOptionTextFn,
  InnerSimpleOption,
  SimpleOption,
  SimpleOptionValue,
  UseBasicAutoCompleteStyleFn,
  UseBasicAutoCompleteStyleFnProps,
};
