import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { IconHTMLProps } from '../types';

const icon: IStyle<IconHTMLProps> = {
  iColorTheme: {
    light: {
      color: neutral[100],
    },
    dark: {
      color: neutral[100],
    },
  },
  iCss: ({ getThemeColor }) => ({
    color: getThemeColor('color'),
    fontSize: '16px',
  }),
};

export { icon };
