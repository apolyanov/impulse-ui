import { neutral, volcano } from '@impulse-ui/colours';
import { IOStyle, IStyle } from '@impulse-ui/core';
import { TextInputCompositeProps } from '../types';

const textInputStyle: IOStyle<TextInputCompositeProps> = {
  iTheme: {
    light: {
      backgroundColor: neutral[10],
      borderColor: volcano[60],
      iconColor: neutral[80],
      clearButtonBackgroundColor: neutral[10],
      ':focus': {
        clearButtonBackgroundColor: neutral[40],
      },
      ':hover': {
        clearButtonBackgroundColor: neutral[40],
      },
      ':disabled': {
        borderColor: volcano[20],
        iconColor: neutral[60],
      },
    },
  },
  iCss: ({ getThemeColor, clearable }) => ({
    width: '100%',
    maxWidth: 250,
    minWidth: 128,
    padding: 0,
    '.IMUI-TextInput-container': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      borderStyle: 'solid',
      height: 38,
      borderRadius: 4,
      borderWidth: 1,
      backgroundColor: getThemeColor('backgroundColor'),
      borderColor: getThemeColor('borderColor'),
      '&[data-disabled="true"]': {
        borderColor: getThemeColor('borderColor', ':disabled'),
      },
      '.IMUI-TextInput-input': {
        marginRight: clearable ? 26 : 0,
      },
      '.IMUI-TextInput-icon': {
        fontSize: 16,
        width: 16,
        marginRight: 4,
        color: getThemeColor('iconColor'),
        '&[data-disabled="true"]': {
          color: getThemeColor('iconColor', ':disabled'),
        },
      },
      '.IMUI-TextInput-clear-button': {
        position: 'absolute',
        filter: 'unset',
        marginRight: 'auto',
        height: 20,
        right: 8,
        width: 20,
        minHeight: 'unset',
        '.IMUI-Icon': {
          color: getThemeColor('iconColor'),
        },
        background: getThemeColor('clearButtonBackgroundColor'),
        '&:focus': {
          background: getThemeColor('clearButtonBackgroundColor', ':focus'),
        },
        '&:hover': {
          background: getThemeColor('clearButtonBackgroundColor', ':hover'),
        },
      },
    },
  }),
};

const input: IStyle<TextInputCompositeProps> = {
  iTheme: {
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
