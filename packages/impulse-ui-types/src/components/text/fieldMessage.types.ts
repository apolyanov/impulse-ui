import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IconStyleProps } from '../icon';
import { ContainerStyleProps } from '../layout';
import { IOProps, IOStyle } from '../theme';

import { TypographyStyleProps } from './typography.types';

enum FieldMessageType {
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

interface FieldMessageProps extends FieldMessageRestProps {
  iStyle?: Partial<FieldMessageStyle>;
  iProps?: Partial<FieldMessageStyleProps>;
}

interface FieldMessageRestProps {
  type?: FieldMessageType;
  icon?: IconDefinition;
  message: string;
}

interface FieldMessageStyle {
  mainContainerStyle: Partial<FieldMessageComponentStyle<ContainerStyleProps>>;
  iconStyle: Partial<FieldMessageComponentStyle<IconStyleProps>>;
  typographyStyle: Partial<FieldMessageComponentStyle<TypographyStyleProps>>;
}

interface FieldMessageStyleProps {
  mainContainerStyleProps: Partial<FieldMessageComponentProps<ContainerStyleProps>>;
  iconStyleProps: Partial<FieldMessageComponentProps<IconStyleProps>>;
  typographyStyleProps: Partial<FieldMessageComponentProps<TypographyStyleProps>>;
}

interface FieldMessageComponentStyle<T> {
  success: IOStyle<T, FieldMessageRestProps>;
  warning: IOStyle<T, FieldMessageRestProps>;
  info: IOStyle<T, FieldMessageRestProps>;
  error: IOStyle<T, FieldMessageRestProps>;
}

interface FieldMessageComponentProps<T> {
  success: IOProps<T>;
  warning: IOProps<T>;
  info: IOProps<T>;
  error: IOProps<T>;
}

interface UseFieldMessageStyleFnProps {
  mainContainerStyle?: IOStyle;
  iconStyle?: IOStyle;
  typographyStyle?: IOStyle;
  mainContainerStyleProps?: IOProps<ContainerStyleProps>;
  iconStyleProps?: IOProps<IconStyleProps>;
  typographyStyleProps?: IOProps<IconStyleProps>;
  getFieldMessageIcon: GetFieldMessageIcon;
}

interface GetFieldMessageIcon {
  (type: FieldMessageType, icon?: IconDefinition): IconDefinition;
}

interface UseFieldMessageStyleFn {
  (
    rest: FieldMessageRestProps,
    iStyle?: Partial<FieldMessageStyle>,
    iProps?: Partial<FieldMessageStyleProps>,
  ): UseFieldMessageStyleFnProps;
}

export type {
  FieldMessageComponentProps,
  FieldMessageComponentStyle,
  FieldMessageProps,
  FieldMessageStyle,
  FieldMessageStyleProps,
  GetFieldMessageIcon,
  UseFieldMessageStyleFn,
  UseFieldMessageStyleFnProps,
};

export { FieldMessageType };
