import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { TypographyHTMLProps } from '../types';

const typography: IStyle<TypographyHTMLProps> = {
  iTheme: {
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
