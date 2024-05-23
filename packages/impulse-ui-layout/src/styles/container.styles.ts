import { neutral } from '@impulse-ui/colours';
import { ContainerHTMLProps, IStyle } from '@impulse-ui/types';

const container: IStyle<ContainerHTMLProps> = {
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
};

export { container };
