import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '../types';

const container: IStyle<ContainerHTMLProps> = {
  iTheme: {
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
  iCss: ({ iTheme }) => ({
    backgroundColor: iTheme.backgroundColor,
    color: iTheme.color,
    borderColor: iTheme.borderColor,
  }),
};

export { container };
