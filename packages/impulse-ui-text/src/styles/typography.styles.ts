import { neutral } from '@impulse-ui/colours';
import { TypographyHTMLProps } from '../types';
import { IStyle } from '@impulse-ui/core';

const typography: IStyle<TypographyHTMLProps> = {
  iColorTheme: {
    light: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    color: getThemeColor('color'),
    fontSize: '14px',
    '&:hover': {
      cursor: 'inherit',
    },
  }),
};

export { typography };
