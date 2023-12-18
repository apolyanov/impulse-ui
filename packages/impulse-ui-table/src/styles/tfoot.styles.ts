import { neutral1, neutral12, neutral13 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TFootStyleProps } from '@impulse-ui/types';

const tfoot: ComponentTheme<TFootStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral1,
        backgroundColorHover: neutral1,
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
      dark: {
        backgroundColor: neutral1,
        backgroundColorHover: neutral1,
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `4px`),
      padding: shouldRenderCssProp(iProps.hasPadding, '8px'),
      margin: shouldRenderCssProp(iProps.hasMargin, '8px'),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral13})`),
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