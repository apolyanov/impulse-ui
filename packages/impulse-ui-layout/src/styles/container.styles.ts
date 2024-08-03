import { neutral } from '@impulse-ui/colours';
import { ContainerHTMLProps } from '../types';
import { IStyle } from '@impulse-ui/core';

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
