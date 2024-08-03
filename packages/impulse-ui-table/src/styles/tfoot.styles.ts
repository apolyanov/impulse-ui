import { neutral } from '@impulse-ui/colours';
import { IStyle, paddingX, paddingY } from '@impulse-ui/core';
import { TFootHTMLProps } from '../types';

const tfoot: IStyle<TFootHTMLProps> = {
  iColorTheme: {
    light: {
      backgroundColor: neutral[10],
      borderColor: 'transparent',
      color: neutral[200],
    },
    dark: {
      backgroundColor: neutral[10],
      borderColor: 'transparent',
      color: neutral[200],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
    '& td': {
      ...paddingY(8),
      ...paddingX(10),
      textAlign: 'start',
    },
    '& td:first-of-type': {
      borderRadius: '4px 0 0 4px',
    },
    '& td:last-of-type': {
      borderRadius: '0 4px 4px 0',
    },
  }),
};

export { tfoot };
