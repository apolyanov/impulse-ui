import { neutral12, neutral13 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, THeaderStyleProps } from '@impulse-ui/types';

const theader: ComponentTheme<THeaderStyleProps> = {
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
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 1px 1px ${neutral13})`),
      padding: shouldRenderCssProp(iProps.hasPadding, '8px 16px'),
      textAlign: 'start',
    }),
  },
  iStyleProps: {
    hasPadding: true,
  },
};

export { theader };