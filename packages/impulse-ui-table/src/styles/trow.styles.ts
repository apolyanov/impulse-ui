import { neutral } from '@impulse-ui/colours';
import { IStyle, TRowHTMLProps } from '@impulse-ui/types';

const trow: IStyle<TRowHTMLProps> = {
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
    '&[data-row-type="body-row"]:hover': {
      backgroundColor: neutral[40],
    },
  }),
};

export { trow };
