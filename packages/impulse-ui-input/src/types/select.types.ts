import { IComponent, SimpleOption, UseProcessedoptionsProps } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';
import { ClearButtonProps } from './clear-button.ts';

interface SelectProps<T> extends SelectRestProps<T>, IComponent<SelectRestProps<T>> {}

interface SelectRestProps<T> extends UseProcessedoptionsProps<T>, ContainerHTMLProps {
  loading?: boolean;
  selectOnBlur?: boolean;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
  placeholder?: string;
  clearButton?: ClearButtonProps;
}

export type { SelectProps, SelectRestProps };
