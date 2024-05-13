import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TRowHTMLProps } from '@impulse-ui/types';

const trow: ComponentTheme<TRowHTMLProps> = {
  iStyle: {
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
  },
};

export { trow };
