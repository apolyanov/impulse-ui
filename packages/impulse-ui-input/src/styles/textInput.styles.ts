import { neutral1, neutral4, neutral6, neutral8, neutral12, neutral13, volcano5, volcano6 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme, InputStyleProps, TextInputStyle, TextInputStyleProps } from '@impulse-ui/types';

const textInputStyle: Partial<TextInputStyle> = {
  mainContainerStyle: {
    iCss: {
      width: '100%',
      maxWidth: '250px',
      margin: '8px 0',
      padding: 0,
    },
  },
  inputContainerStyle: {
    iColorTheme: {
      light: {
        borderColor: volcano6,
        borderColorHover: volcano5,
      },
    },
    iCss: {
      margin: '0',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      borderStyle: 'solid',
      height: '38px',
      borderRadius: '4px',
      borderWidth: '1px',
    },
  },
  inputStyle: {
    iCss: ({ parentProps }) => ({
      marginRight: parentProps?.clearable ? '26px' : 0,
    }),
  },
  iconStyle: {
    iColorTheme: {
      light: {
        color: neutral8,
      },
    },
    iCss: {
      fontSize: '20px',
      width: '20px',
      marginRight: '4px',
    },
  },
  clearIconStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral1,
          backgroundColorHover: neutral4,
        },
      },
      iCss: ({ iColorTheme }) => ({
        margin: 0,
        position: 'absolute',
        marginRight: 'auto',
        height: '24px',
        right: '8px',
        width: '24px',
        minHeight: 'unset',
        '&:focus': {
          background: iColorTheme.backgroundColorHover,
        },
      }),
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral6,
          colorHover: neutral6,
        },
      },
    },
  },
};

const textInputStyleProps: Partial<TextInputStyleProps> = {
  clearIconStyleProps: {
    buttonStyleProps: {
      hasDropShadow: false,
    },
  },
  inputContainerStyleProps: {
    hasDropShadow: true,
  },
};

const input: ComponentTheme<InputStyleProps> = {
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
      color: iColorTheme.color,
      fontSize: '14px',
      height: '32px',
      padding: '4px 0',
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `8px`),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral13})`),
      flex: 1,
      width: '100%',
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
};

export { input, textInputStyle, textInputStyleProps };
