import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TypographyStyleProps } from '@impulse-ui/types';

const typography: ComponentTheme<TypographyStyleProps> = {
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
      color: iColorTheme.color,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 4),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      padding: shouldRenderCssProp(iProps.hasPadding, '0 4px'),
      margin: shouldRenderCssProp(iProps.hasMargin, 4),
      fontSize: '14px',
      '&:hover': {
        cursor: 'inherit',
      },
    }),
  },
  iStyleProps: {},
};

export { typography };
