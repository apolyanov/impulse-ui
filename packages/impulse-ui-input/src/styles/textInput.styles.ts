import { neutral, volcano } from '@impulse-ui/colours';
import { TextInputCompositeProps, TextInputStyle } from '../types';
import { IStyle } from '@impulse-ui/core';

const textInputStyle: Partial<TextInputStyle<{}>> = {
  mainContainerStyle: {
    iCss: {
      width: '100%',
      maxWidth: 250,
      minWidth: 128,
      margin: '8px 0',
      padding: 0,
    },
  },
  inputContainerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        borderColor: volcano[60],
        ':disabled': {
          borderColor: volcano[20],
        },
      },
    },
    iCss: ({ getThemeColor }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      borderStyle: 'solid',
      height: 38,
      borderRadius: 4,
      borderWidth: 1,
      '&[data-disabled="true"]': {
        borderColor: getThemeColor('borderColor', ':disabled'),
      },
    }),
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
        ':disabled': {
          color: neutral[60],
        },
      },
    },
    iCss: ({ getThemeColor }) => ({
      fontSize: 16,
      width: 16,
      marginRight: 4,
      '&[data-disabled="true"]': {
        color: getThemeColor('color', ':disabled'),
      },
    }),
  },
  clearIconStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral[10],
          ':focus': {
            backgroundColor: neutral[40],
          },
          ':hover': {
            backgroundColor: neutral[40],
          },
        },
      },
      iCss: ({ getThemeColor }) => ({
        position: 'absolute',
        filter: 'unset',
        marginRight: 'auto',
        height: 20,
        right: 8,
        width: 20,
        minHeight: 'unset',
        '&:focus': {
          background: getThemeColor('backgroundColor', ':focus'),
        },
      }),
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral[60],
        },
      },
    },
  },
};

const input: IStyle<TextInputCompositeProps> = {
  iColorTheme: {
    light: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    color: getThemeColor('color'),
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
      '-webkit-text-fill-color': getThemeColor('color'),
    },
  }),
};

export { input, textInputStyle };
