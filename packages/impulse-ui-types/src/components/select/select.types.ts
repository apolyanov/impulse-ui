import { HTMLAttributes } from 'react';

import { AutoCompleteItemStyle, AutoCompleteRestProps } from '../auto-complete';
import { IOStyle } from '../theme';
import { SimpleOptionValue, UseProcessedoptionsProps } from '../utils';

interface SelectProps<T> extends SelectRestProps<T>, HTMLAttributes<HTMLDivElement> {
  iStyle?: Partial<SelectStyle<T>>;
}

interface SelectRestProps<T> extends UseProcessedoptionsProps<T> {
  loading?: boolean;
  selectOnBlur?: boolean;
  onOptionSelect?: (optionValue: SimpleOptionValue | null) => void;
  placeholder?: string;
}

interface SelectStyle<T> {
  mainContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  selectOptionsContainerStyle: IOStyle<AutoCompleteRestProps<T>>;
  selectOptionStyle: Partial<AutoCompleteItemStyle>;
  loadingTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<AutoCompleteRestProps<T>>;
}

export type { SelectProps, SelectRestProps, SelectStyle };
