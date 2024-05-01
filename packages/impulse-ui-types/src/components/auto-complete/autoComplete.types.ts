import { HTMLAttributes } from 'react';

import { TextInputCompositeProps, TextInputStyle } from '../input';
import { IOStyle } from '../theme';
import { SimpleOptionValue, UseProcessedoptionsProps } from '../utils';

import { AutoCompleteItemStyle } from './autoCompleteItem.types';

interface AutoCompleteProps<T> extends AutoCompleteRestProps<T> {
  iStyle?: Partial<AutoCompleteStyle<T>>;
}

interface AutoCompleteRestProps<T> extends HTMLAttributes<HTMLDivElement>, UseProcessedoptionsProps<T> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  inputProps?: TextInputCompositeProps;
  onOptionSelect?: (optionValue: SimpleOptionValue | null) => void;
}

interface AutoCompleteStyle<T> {
  mainContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
}

export type { AutoCompleteProps, AutoCompleteRestProps, AutoCompleteStyle };
