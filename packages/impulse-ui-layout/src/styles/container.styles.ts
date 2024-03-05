import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, ContainerStyleProps } from '@impulse-ui/types';

const container: ComponentTheme<ContainerStyleProps> = {
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
      borderColor: iColorTheme.borderColor,
      display: 'flex',
      flexDirection: 'column',
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 4),
      padding: shouldRenderCssProp(iProps.hasPadding, 8),
      margin: shouldRenderCssProp(iProps.hasMargin, 8),
    }),
  },
  iStyleProps: {
    hasMargin: true,
    hasPadding: true,
  },
};

export { container };
