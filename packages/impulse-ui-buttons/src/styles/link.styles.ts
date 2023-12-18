import { volcano6 } from '@impulse-ui/colours';
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
        color: volcano6,
        colorHover: volcano6,
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano6,
        colorHover: volcano6,
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      color: iColorTheme.color,
      backgroundColor: iColorTheme.backgroundColor,
      width: 'fit-content',
      padding: shouldRenderCssProp(iProps.hasPadding, '4px'),
      textTransform: 'none',
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
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
