import { dustRed, geekBlue, polarGreen, sunriseYellow } from '@impulse-ui/colours';
import { Property } from 'csstype';

import { IOStyle } from '@impulse-ui/core';
import { FieldMessageComponentStyle, FieldMessageStyle, FieldMessageType } from '../types';
import { ERROR, INFO, SUCCESS, WARNING } from '../utils';

const fieldMessageColor = (type: FieldMessageType): Property.Color => {
  switch (type) {
    case SUCCESS:
      return polarGreen[80];
    case WARNING:
      return sunriseYellow[70];
    case ERROR:
      return dustRed[80];
    case INFO:
      return geekBlue[60];
    default:
      return geekBlue[60];
  }
};

const defaultContainerStyle: IOStyle = {
  iCss: { margin: '6px', padding: '0', display: 'flex', flexDirection: 'row', alignItems: 'center' },
};

const defaultTypographyStyle = (type: FieldMessageType): IOStyle => {
  return {
    iColorTheme: {
      light: { color: fieldMessageColor(type) },
      dark: { color: fieldMessageColor(type) },
    },
    iCss: { fontSize: '14px', margin: '0 4px' },
  };
};

const defaultIconStyle = (type: FieldMessageType): IOStyle => {
  return {
    iColorTheme: {
      light: { color: fieldMessageColor(type) },
      dark: { color: fieldMessageColor(type) },
    },
    iCss: { fontSize: '16px', margin: '0' },
  };
};

const defaultFieldMessageContainerStyle: FieldMessageComponentStyle = {
  error: defaultContainerStyle,
  info: defaultContainerStyle,
  success: defaultContainerStyle,
  warning: defaultContainerStyle,
};

const defaultFieldMessageIconStyle: FieldMessageComponentStyle = {
  error: defaultIconStyle(ERROR),
  info: defaultIconStyle(INFO),
  success: defaultIconStyle(SUCCESS),
  warning: defaultIconStyle(WARNING),
};

const defaultFieldMessageTypographyStyle: FieldMessageComponentStyle = {
  error: defaultTypographyStyle(ERROR),
  info: defaultTypographyStyle(INFO),
  success: defaultTypographyStyle(SUCCESS),
  warning: defaultTypographyStyle(WARNING),
};

const defaultFieldMessageStyle: Partial<FieldMessageStyle> = {
  mainContainerStyle: defaultFieldMessageContainerStyle,
  iconStyle: defaultFieldMessageIconStyle,
  typographyStyle: defaultFieldMessageTypographyStyle,
};

export { defaultFieldMessageStyle };
