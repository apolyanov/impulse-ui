import { HTMLAttributes } from 'react';

import { IOStyle } from '../theme';
import { SimpleOptionValue, UseProcessedoptionsProps } from '../utils';

import { SelectOptionStyle } from './select-option.types';

interface SelectProps<T> extends SelectRestProps<T> {
  iStyle?: Partial<SelectStyle<T>>;
}

interface SelectRestProps<T> extends UseProcessedoptionsProps<T>, HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  selectOnBlur?: boolean;
  onOptionSelect?: (optionValue: SimpleOptionValue | null) => void;
  placeholder?: string;
}

interface SelectStyle<T> {
  mainContainerStyle: IOStyle<SelectRestProps<T>>;
  selectedItemTypographyStyle: IOStyle<SelectRestProps<T>>;
  dropdownIconStyle: IOStyle<T>;
  selectOptionsContainerStyle: IOStyle<SelectRestProps<T>>;
  selectOptionStyle: Partial<SelectOptionStyle>;
  loadingTypographyStyle: IOStyle<SelectRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<SelectRestProps<T>>;
}

export type { SelectProps, SelectRestProps, SelectStyle };
