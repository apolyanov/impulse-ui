import { TextInputCompositeProps, TextInputStyle } from '../input';
import { ContainerHTMLProps } from '../layout';
import { IOStyle } from '../theme';
import { SimpleOption, UseProcessedoptionsProps } from '../utils';

import { AutoCompleteItemStyle } from './autoCompleteItem.types';

interface AutoCompleteProps<T> extends AutoCompleteRestProps<T> {
  iStyle?: Partial<AutoCompleteStyle<T>>;
}

interface AutoCompleteRestProps<T> extends ContainerHTMLProps, UseProcessedoptionsProps<T> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  inputProps?: TextInputCompositeProps;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
}

interface AutoCompleteStyle<T> {
  mainContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  textInputStyle: Partial<TextInputStyle>;
  autoCompleteItemsContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  autoCompleteItemStyle: Partial<AutoCompleteItemStyle>;
  loadingSpinnerStyle: IOStyle<AutoCompleteRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
}

export type { AutoCompleteProps, AutoCompleteRestProps, AutoCompleteStyle };
