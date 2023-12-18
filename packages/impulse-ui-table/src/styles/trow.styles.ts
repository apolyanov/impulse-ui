import { neutral12, neutral13 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TRowStyleProps } from '@impulse-ui/types';

const trow: ComponentTheme<TRowStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral13})`),
    }),
  },
  iStyleProps: {
    hasDropShadow: false,
  },
};

export { trow };
