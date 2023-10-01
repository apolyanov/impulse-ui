import { LinkStyleProps, TextButtonStyleProps } from '../buttons';
import { InputStyleProps } from '../input';
import { TypographyStyleProps } from '../text';

import { neutral1, neutral2, neutral10, neutral12, volcano5, volcano6, volcano7 } from './colors';
import { ComponentsThemes } from './types';

const shouldRenderCssProp = <T>(shouldRender: boolean | undefined, cssProp: T): T | undefined => {
  if (shouldRender) return cssProp;
};

const componentsThemes: ComponentsThemes = {
  button: {
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
  },
  container: {
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
      iCss: (iColorTheme, iProps) => ({
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
  },
  input: {
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
      iCss: (iColorTheme, iProps: InputStyleProps) => ({
        backgroundColor: iColorTheme.backgroundColor,
        color: iColorTheme.color,
        fontSize: '14px',
        height: '32px',
        padding: '4px 0',
        borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
        filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
        flex: 1,
        '&::-webkit-input-placeholder': {
          textIndent: '4px',
        },
        '&:-moz-placeholder': {
          textIndent: '4px',
        },
        '&::-moz-placeholder': {
          textIndent: '4px',
        },
        '&:-ms-input-placeholder': {
          textIndent: '4px',
        },
        '&:-webkit-autofill': {
          boxShadow: '0 0 0 100px white inset',
          '-webkit-text-fill-color': iColorTheme.color,
        },
      }),
    },
    iStyleProps: {
      hasBorderRadius: true,
    },
  },
  textButton: {
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
      iCss: (iColorTheme, iProps: TextButtonStyleProps) => ({
        backgroundColor: iColorTheme.backgroundColor,
        color: iColorTheme.color,
        borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
        filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
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
  },
  typography: {
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
      iCss: (iColorTheme, iProps: TypographyStyleProps) => ({
        backgroundColor: iColorTheme.backgroundColor,
        color: iColorTheme.color,
        borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `4px`),
        filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
        padding: shouldRenderCssProp(iProps.hasPadding, '0 4px'),
        margin: shouldRenderCssProp(iProps.hasMargin, '4px'),
        fontSize: '14px',
        '&:hover': {
          cursor: 'inherit',
        },
      }),
    },
    iStyleProps: {},
  },
  icon: {
    iStyle: {
      iColorTheme: {
        light: {
          backgroundColor: 'transparent',
          backgroundColorHover: 'transparent',
          borderColor: 'transparent',
          borderColorHover: 'transparent',
          color: neutral10,
          colorHover: neutral10,
        },
        dark: {
          backgroundColor: 'transparent',
          backgroundColorHover: 'transparent',
          borderColor: 'transparent',
          borderColorHover: 'transparent',
          color: neutral10,
          colorHover: neutral10,
        },
      },
      iCss: (iColorTheme) => ({
        color: iColorTheme.color,
        fontSize: '16px',
      }),
    },
    iStyleProps: {
      hasDropShadow: true,
    },
  },
  link: {
    iStyle: {
      iColorTheme: {
        light: {
          backgroundColor: 'transparent',
          backgroundColorHover: 'transparent',
          borderColor: 'transparent',
          borderColorHover: 'transparent',
          color: volcano6,
          colorHover: volcano6,
        },
        dark: {
          backgroundColor: 'transparent',
          backgroundColorHover: 'transparent',
          borderColor: 'transparent',
          borderColorHover: 'transparent',
          color: volcano6,
          colorHover: volcano6,
        },
      },
      iCss: (iColorTheme, iProps: LinkStyleProps) => ({
        color: iColorTheme.color,
        backgroundColor: iColorTheme.backgroundColor,
        width: 'fit-content',
        padding: shouldRenderCssProp(iProps.hasPadding, '4px'),
        textTransform: 'none',
        borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
        filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
        '&:hover': {
          backgroundColor: iColorTheme.backgroundColorHover,
          color: iColorTheme.colorHover,
          cursor: 'pointer',
        },
      }),
    },
    iStyleProps: {},
  },
  divider: {
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
      iCss: (iColorTheme, iProps: TextButtonStyleProps) => ({
        backgroundColor: iColorTheme.backgroundColor,
        color: iColorTheme.color,
        borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
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
  },
};

export { componentsThemes, shouldRenderCssProp };
