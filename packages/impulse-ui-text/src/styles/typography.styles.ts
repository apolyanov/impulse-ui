import { neutral } from '@impulse-ui/colours';
import { IStyle, TypographyHTMLProps } from '@impulse-ui/types';

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
