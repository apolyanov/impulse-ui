import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TFootStyleProps } from '@impulse-ui/types';

const tfoot: ComponentTheme<TFootStyleProps> = {
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
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 4),
      padding: shouldRenderCssProp(iProps.hasPadding, 8),
      margin: shouldRenderCssProp(iProps.hasMargin, 8),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      textAlign: 'center',
      '& td': {
        padding: '8px 16px',
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
  iStyleProps: {
    hasBorderRadius: true,
    hasPadding: true,
    hasMargin: true,
    hasDropShadow: true,
  },
};

export { tfoot };
