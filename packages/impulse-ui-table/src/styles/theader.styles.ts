import { neutral } from '@impulse-ui/colours';
import { ComponentTheme } from '@impulse-ui/types';

const theader: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      fontWeight: 500,
      height: 38,
      maxHeight: 76,
      verticalAlign: 'middle',
      textAlign: 'start',
    }),
  },
};

export { theader };
