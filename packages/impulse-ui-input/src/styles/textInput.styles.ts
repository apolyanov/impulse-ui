import { neutral, volcano } from '@impulse-ui/colours';
import { ComponentTheme, TextInputStyle } from '@impulse-ui/types';
const textInputStyle: Partial<TextInputStyle> = {
  mainContainerStyle: {
    iCss: {
      width: '100%',
      maxWidth: 250,
      margin: '8px 0',
      padding: 0,
    },
  },
  inputContainerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        borderColor: volcano[60],
        borderColorHover: volcano[50],
      },
    },
    iCss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      borderStyle: 'solid',
      height: 38,
      borderRadius: 4,
      borderWidth: 1,
    },
  },
  inputStyle: {
    iCss: ({ clearable }) => ({
      marginRight: clearable ? 26 : 0,
    }),
  },
  iconStyle: {
    iColorTheme: {
      light: {
        color: neutral[80],
      },
    },
    iCss: {
      fontSize: 16,
      width: 16,
      marginRight: 4,
    },
  },
  clearIconStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral[10],
          backgroundColorHover: neutral[40],
        },
      },
      iCss: ({ iColorTheme }) => ({
        position: 'absolute',
        filter: 'unset',
        marginRight: 'auto',
        height: 20,
        right: 8,
        width: 20,
        minHeight: 'unset',
        '&:focus': {
          background: iColorTheme.backgroundColorHover,
        },
      }),
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral[60],
          colorHover: neutral[60],
        },
      },
    },
  },
};

const input: ComponentTheme = {
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
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      fontSize: 14,
      height: 32,
      padding: '4px 0',
      borderRadius: 8,
      flex: 1,
      width: '100%',
      '&::-webkit-input-placeholder': {
        textIndent: 4,
      },
      '&:-moz-placeholder': {
        textIndent: 4,
      },
      '&::-moz-placeholder': {
        textIndent: 4,
      },
      '&:-ms-input-placeholder': {
        textIndent: 4,
      },
      '&:-webkit-autofill': {
        boxShadow: '0 0 0 100px white inset',
        '-webkit-text-fill-color': iColorTheme.color,
      },
    }),
  },
};

export { input, textInputStyle };
