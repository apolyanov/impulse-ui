import { neutral1, volcano6, volcano7 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ButtonStyleProps, ComponentTheme } from '@impulse-ui/types';

const button: ComponentTheme<ButtonStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: volcano6,
        backgroundColorHover: volcano7,
        borderColor: volcano6,
        borderColorHover: volcano7,
        color: neutral1,
        colorHover: neutral1,
      },
      dark: {
        backgroundColor: volcano6,
        backgroundColorHover: volcano7,
        borderColor: volcano6,
        borderColorHover: volcano7,
        color: neutral1,
        colorHover: neutral1,
      },
    },
    iCss: (iColorTheme, iProps) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
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
      fontSize: '14px',
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
      textTransform: 'uppercase',
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `4px`),
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
  iStyleProps: {
    hasDropShadow: true,
    hasBorderRadius: true,
    hasPadding: true,
    hasMargin: true,
  },
};

export { button };
