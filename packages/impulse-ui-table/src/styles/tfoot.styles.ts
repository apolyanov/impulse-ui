import { neutral } from '@impulse-ui/colours';
import { paddingX, paddingY } from '@impulse-ui/core';
import { ComponentTheme } from '@impulse-ui/types';

const tfoot: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: neutral[10],
        backgroundColorHover: neutral[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '& td': {
        ...paddingY(10),
        ...paddingX(8),
        textAlign: 'start',
      },
      '& td:first-of-type': {
        borderRadius: '4px 0 0 4px',
      },
      '& td:last-of-type': {
        borderRadius: '0 4px 4px 0',
      },
    }),
  },
};

export { tfoot };
