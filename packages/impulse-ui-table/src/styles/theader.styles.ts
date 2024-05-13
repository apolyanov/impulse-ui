import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, THeaderHTMLProps } from '@impulse-ui/types';

const theader: ComponentTheme<THeaderHTMLProps> = {
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
      fontWeight: 500,
      height: 38,
      maxHeight: 76,
      verticalAlign: 'middle',
      textAlign: 'start',
    }),
  },
};

export { theader };
