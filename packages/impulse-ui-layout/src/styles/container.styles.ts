import { neutral1, neutral2, neutral12 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, ContainerStyleProps } from '@impulse-ui/types';

const container: ComponentTheme<ContainerStyleProps> = {
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
        backgroundColor: neutral2,
        backgroundColorHover: neutral2,
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderColor: iColorTheme.borderColor,
      display: 'flex',
      flexDirection: 'column',
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `4px`),
      padding: shouldRenderCssProp(iProps.hasPadding, '8px'),
      margin: shouldRenderCssProp(iProps.hasMargin, '8px'),
    }),
  },
  iStyleProps: {
    hasMargin: true,
    hasPadding: true,
  },
};

export { container };
