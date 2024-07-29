import { ContainerHTMLProps } from '../layout';
import { IOStyle } from '../theme';
import { SimpleOption, UseProcessedoptionsProps } from '../utils';

import { SelectOptionStyle } from './select-option.types';
import { ClearButtonParentProps } from '../inputs-common';
import { IconButtonStyle } from '../buttons';

interface SelectProps<T> extends SelectRestProps<T> {
  iStyle?: Partial<SelectStyle<T>>;
}

interface SelectRestProps<T> extends UseProcessedoptionsProps<T>, ContainerHTMLProps {
  loading?: boolean;
  selectOnBlur?: boolean;
  clearButtonProps?: Partial<ClearButtonParentProps>;
  clearable?: boolean;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
  placeholder?: string;
}

interface SelectStyle<T> {
  mainContainerStyle: IOStyle<SelectRestProps<T>>;
  selectedItemTypographyStyle: IOStyle<SelectRestProps<T>>;
  selectPlaceholderStyle: IOStyle<SelectRestProps<T>>;
  dropdownIconStyle: IOStyle<SelectRestProps<T>>;
  clearIconStyle: Partial<IconButtonStyle<SelectRestProps<T>>>;
  selectOptionsContainerStyle: IOStyle<SelectRestProps<T>>;
  selectOptionStyle: Partial<SelectOptionStyle>;
  loadingSpinnerStyle: IOStyle<SelectRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<SelectRestProps<T>>;
}

export type { SelectProps, SelectRestProps, SelectStyle };
