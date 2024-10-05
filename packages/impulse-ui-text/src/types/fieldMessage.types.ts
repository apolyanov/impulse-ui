import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IOStyle } from '@impulse-ui/core';

type FieldMessageType = 'success' | 'warning' | 'info' | 'error';

interface FieldMessageProps extends FieldMessageRestProps {
  iStyle?: Partial<FieldMessageStyle>;
}

interface FieldMessageRestProps {
  type?: FieldMessageType;
  icon?: IconDefinition;
  message: string;
}

interface FieldMessageStyle {
  mainContainerStyle: Partial<FieldMessageComponentStyle>;
  iconStyle: Partial<FieldMessageComponentStyle>;
  typographyStyle: Partial<FieldMessageComponentStyle>;
}

interface FieldMessageComponentStyle {
  success: IOStyle<FieldMessageRestProps>;
  warning: IOStyle<FieldMessageRestProps>;
  info: IOStyle<FieldMessageRestProps>;
  error: IOStyle<FieldMessageRestProps>;
}

interface UseFieldMessageStyleFnProps {
  mainContainerStyle?: IOStyle<FieldMessageRestProps>;
  iconStyle?: IOStyle<FieldMessageRestProps>;
  typographyStyle?: IOStyle<FieldMessageRestProps>;
  getFieldMessageIcon: GetFieldMessageIcon;
}

interface GetFieldMessageIcon {
  (type: FieldMessageType, icon?: IconDefinition): IconDefinition;
}

interface UseFieldMessageStyleFn {
  (rest: FieldMessageRestProps, iStyle?: Partial<FieldMessageStyle>): UseFieldMessageStyleFnProps;
}

export type {
  FieldMessageComponentStyle,
  FieldMessageProps,
  FieldMessageStyle,
  FieldMessageType,
  GetFieldMessageIcon,
  UseFieldMessageStyleFn,
  UseFieldMessageStyleFnProps,
  FieldMessageRestProps,
};
