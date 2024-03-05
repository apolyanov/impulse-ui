import { neutral } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, DividerStyleProps } from '@impulse-ui/types';

const divider: ComponentTheme<DividerStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: neutral[100],
        borderColorHover: neutral[100],
        color: 'transparent',
        colorHover: 'transparent',
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: neutral[100],
        borderColorHover: neutral[100],
        color: 'transparent',
        colorHover: 'transparent',
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, 8),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      width: '100%',
      border: `1px solid ${iColorTheme.borderColor}`,
      padding: '0',
      margin: '4px 0',
    }),
  },
  iStyleProps: {
    hasBorderRadius: true,
  },
};

export { divider };
