import { SelectOptionStyle } from './select-option.types';
import { IOStyle, SimpleOption, UseProcessedoptionsProps } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { ClearButtonProps } from './clear-button.ts';
import { IconButtonStyle } from '@impulse-ui/buttons';

interface SelectProps<T> extends SelectRestProps<T> {
  iStyle?: Partial<SelectStyle<T>>;
}

interface SelectRestProps<T> extends UseProcessedoptionsProps<T>, ContainerHTMLProps {
  loading?: boolean;
  selectOnBlur?: boolean;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
  placeholder?: string;
  clearButton?: ClearButtonProps;
}

interface SelectStyle<T> {
  mainContainerStyle: IOStyle<SelectRestProps<T>>;
  selectedItemTypographyStyle: IOStyle<SelectRestProps<T>>;
  dropdownIconStyle: IOStyle<SelectRestProps<T>>;
  selectOptionsContainerStyle: IOStyle<SelectRestProps<T>>;
  selectOptionStyle: Partial<SelectOptionStyle>;
  loadingSpinnerStyle: IOStyle<SelectRestProps<T>>;
  clearButtonStyle: Partial<IconButtonStyle<SelectRestProps<T>>>;
  selectPlaceholderStyle: IOStyle<SelectRestProps<T>>;
  noOptionsTypographyStyle: IOStyle<SelectRestProps<T>>;
}

export type { SelectProps, SelectRestProps, SelectStyle };
