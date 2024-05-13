import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TDataHTMLProps } from '@impulse-ui/types';

const tdata: ComponentTheme<TDataHTMLProps> = {
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
      padding: '6px 10px',
      fontSize: 14,
      verticalAlign: 'middle',
    }),
  },
};

export { tdata };
