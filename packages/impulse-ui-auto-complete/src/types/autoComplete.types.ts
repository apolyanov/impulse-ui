import { IComponent, SimpleOption, UseProcessedoptionsProps } from '@impulse-ui/core';
import { TextInputCompositeProps } from '@impulse-ui/input';
import { ContainerProps } from '@impulse-ui/layout';

interface AutoCompleteProps<T> extends AutoCompleteRestProps<T>, IComponent<AutoCompleteRestProps<T>> {}

interface AutoCompleteRestProps<T> extends Omit<ContainerProps, keyof IComponent<object>>, UseProcessedoptionsProps<T> {
  selectOnBlur?: boolean;
  loading?: boolean;
  disableAutoFiltering?: boolean;
  inputProps?: TextInputCompositeProps;
  onOptionSelect?: (optionValue: SimpleOption | null) => void;
}

export type { AutoCompleteProps, AutoCompleteRestProps };
