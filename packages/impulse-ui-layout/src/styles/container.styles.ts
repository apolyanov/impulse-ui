import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '../types';

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
