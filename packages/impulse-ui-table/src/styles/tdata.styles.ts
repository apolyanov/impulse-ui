import { neutral } from '@impulse-ui/colours';
import { ComponentTheme } from '@impulse-ui/types';

const tdata: ComponentTheme = {
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
      padding: '8px 6px',
      fontSize: 14,
      verticalAlign: 'middle',
    }),
  },
};

export { tdata };
