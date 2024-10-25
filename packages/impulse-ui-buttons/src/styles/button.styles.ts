import { neutral, volcano } from '@impulse-ui/colours';
import { IOStyle, IStyle } from '@impulse-ui/core';
import { ButtonHTMLProps, ButtonRestProps } from '../types';
import { Spinner } from '@impulse-ui/loader';

const baseButton: IStyle<ButtonHTMLProps> = {
  iTheme: {
    light: {
      backgroundColor: volcano[60],
      borderColor: volcano[60],
      color: neutral[10],
      ':hover': {
        backgroundColor: volcano[70],
        color: neutral[10],
      },
      ':disabled': {
        backgroundColor: volcano[10],
        color: volcano[40],
      },
    },
    dark: {
      backgroundColor: volcano[60],
      borderColor: volcano[60],
      color: neutral[10],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    color: getThemeColor('color'),
    padding: '0px 28px',
    margin: '8px 0',
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
    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
    textTransform: 'uppercase',
    borderRadius: 4,
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: getThemeColor('backgroundColor', ':hover'),
      color: getThemeColor('color', ':hover'),
      cursor: 'pointer',
    },
    '&:disabled': {
      backgroundColor: getThemeColor('backgroundColor', ':disabled'),
      color: getThemeColor('color', ':disabled'),
      cursor: 'not-allowed',
    },
  }),
};

const button: IOStyle<ButtonRestProps> = {
  iTheme: {
    light: {
      loaderColor: neutral[10],
      ':disabled': {
        loaderColor: volcano[40],
      },
    },
  },
  iCss: ({ getComponentRef, getThemeColor }) => ({
    [getComponentRef(Spinner)]: {
      borderRightColor: getThemeColor('loaderColor'),
    },
    '&:disabled': {
      [getComponentRef(Spinner)]: {
        borderRightColor: getThemeColor('loaderColor', ':disabled'),
      },
    },
  }),
};

export { baseButton, button };
