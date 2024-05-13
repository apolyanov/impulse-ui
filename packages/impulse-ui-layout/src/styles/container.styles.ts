import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, ContainerHTMLProps } from '@impulse-ui/types';

const container: ComponentTheme<ContainerHTMLProps> = {
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
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderColor: iColorTheme.borderColor,
    }),
  },
};

export { container };
