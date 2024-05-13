import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, IconHTMLProps } from '@impulse-ui/types';

const icon: ComponentTheme<IconHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        color: neutral[100],
      },
      dark: {
        color: neutral[100],
      },
    },
    iCss: ({ iColorTheme }) => ({
      color: iColorTheme.color,
      fontSize: '16px',
    }),
  },
};

export { icon };
