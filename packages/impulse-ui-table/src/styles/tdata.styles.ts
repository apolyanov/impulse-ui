import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TDataStyleProps } from '@impulse-ui/types';

const tdata: ComponentTheme<TDataStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      padding: shouldRenderCssProp(iProps.hasPadding, '8px 16px'),
    }),
  },
  iStyleProps: {
    hasPadding: true,
  },
};

export { tdata };
