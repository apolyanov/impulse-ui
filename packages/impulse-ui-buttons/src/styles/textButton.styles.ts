import { neutral13, volcano5, volcano6 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, TextButtonStyleProps } from '@impulse-ui/types';

const textButton: ComponentTheme<TextButtonStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano6,
        colorHover: volcano5,
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano6,
        colorHover: volcano5,
      },
    },
    iCss: ({ iColorTheme, iProps }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral13})`),
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease-in-out',
      textTransform: 'uppercase',
      padding: shouldRenderCssProp(iProps.hasPadding, '0px 28px'),
      margin: shouldRenderCssProp(iProps.hasMargin, '8px 0'),
      minWidth: '128px',
      width: 'fit-content',
      maxWidth: '256px',
      minHeight: '38px',
      height: 'fit-content',
      maxHeight: '76px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
  iStyleProps: {
    hasBorderRadius: true,
    hasPadding: true,
    hasMargin: true,
  },
};

export { textButton };
