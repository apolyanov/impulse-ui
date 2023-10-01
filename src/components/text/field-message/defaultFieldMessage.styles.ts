import { Property } from 'csstype';

import { IconStyleProps } from '../../icon';
import { ContainerStyleProps } from '../../layout';
import { dustRed8, geekBlue6, polarGreen8, sunriseYellow7 } from '../../theme/';
import { IOStyle } from '../../types';
import { FieldMessageComponentStyle, FieldMessageStyle, FieldMessageType, TypographyStyleProps } from '../types';

const fieldMessageColor = (type: FieldMessageType): Property.Color => {
  switch (type) {
    case FieldMessageType.SUCCESS:
      return polarGreen8;
    case FieldMessageType.WARNING:
      return sunriseYellow7;
    case FieldMessageType.ERROR:
      return dustRed8;
    case FieldMessageType.INFO:
      return geekBlue6;
    default:
      return geekBlue6;
  }
};

const defaultContainerStyle: IOStyle = {
  iCss: () => ({ margin: '6px', padding: '0', flexDirection: 'row', alignItems: 'center' }),
};

const defaultTypographyStyle = (type: FieldMessageType): IOStyle => {
  return {
    iColorTheme: {
      light: { color: fieldMessageColor(type) },
      dark: { color: fieldMessageColor(type) },
    },
    iCss: () => ({ fontSize: '14px', margin: '0 4px' }),
  };
};

const defaultIconStyle = (type: FieldMessageType): IOStyle => {
  return {
    iColorTheme: {
      light: { color: fieldMessageColor(type) },
      dark: { color: fieldMessageColor(type) },
    },
    iCss: () => ({ fontSize: '16px', margin: '0' }),
  };
};

const defaultFieldMessageContainerStyle: FieldMessageComponentStyle<ContainerStyleProps> = {
  error: defaultContainerStyle,
  info: defaultContainerStyle,
  success: defaultContainerStyle,
  warning: defaultContainerStyle,
};

const defaultFieldMessageIconStyle: FieldMessageComponentStyle<IconStyleProps> = {
  error: defaultIconStyle(FieldMessageType.ERROR),
  info: defaultIconStyle(FieldMessageType.INFO),
  success: defaultIconStyle(FieldMessageType.SUCCESS),
  warning: defaultIconStyle(FieldMessageType.WARNING),
};

const defaultFieldMessageTypographyStyle: FieldMessageComponentStyle<TypographyStyleProps> = {
  error: defaultTypographyStyle(FieldMessageType.ERROR),
  info: defaultTypographyStyle(FieldMessageType.INFO),
  success: defaultTypographyStyle(FieldMessageType.SUCCESS),
  warning: defaultTypographyStyle(FieldMessageType.WARNING),
};

const defaultFieldMessageStyle: Partial<FieldMessageStyle> = {
  mainContainerStyle: defaultFieldMessageContainerStyle,
  iconStyle: defaultFieldMessageIconStyle,
  typographyStyle: defaultFieldMessageTypographyStyle,
};

export { defaultFieldMessageStyle };
