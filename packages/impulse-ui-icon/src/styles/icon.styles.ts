import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, IconHTMLProps } from '@impulse-ui/types';

const icon: ComponentTheme<IconHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[100],
        colorHover: neutral[100],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[100],
        colorHover: neutral[100],
      },
    },
    iCss: ({ iColorTheme }) => ({
      color: iColorTheme.color,
      fontSize: '16px',
    }),
  },
};

export { icon };
