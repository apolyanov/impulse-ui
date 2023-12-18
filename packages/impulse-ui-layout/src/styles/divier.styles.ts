import { neutral10, neutral13 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, DividerStyleProps } from '@impulse-ui/types';

const divider: ComponentTheme<DividerStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: neutral10,
        borderColorHover: neutral10,
        color: 'transparent',
        colorHover: 'transparent',
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: neutral10,
        borderColorHover: neutral10,
        color: 'transparent',
        colorHover: 'transparent',
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral13})`),
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
