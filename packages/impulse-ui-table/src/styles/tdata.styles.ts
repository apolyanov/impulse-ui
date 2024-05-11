import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TDataHTMLProps } from '@impulse-ui/types';

const tdata: ComponentTheme<TDataHTMLProps> = {
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
      padding: '6px 10px',
      fontSize: 14,
      verticalAlign: 'middle',
    }),
  },
};

export { tdata };
