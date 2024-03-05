import { volcano } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, LinkStyleProps } from '@impulse-ui/types';

const link: ComponentTheme<LinkStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[60],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[60],
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      color: iColorTheme.color,
      backgroundColor: iColorTheme.backgroundColor,
      width: 'fit-content',
      padding: shouldRenderCssProp(iProps.hasPadding, 4),
      textTransform: 'none',
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 8),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
  iStyleProps: {},
};

export { link };
