import { volcano } from '@impulse-ui/colours';
import { IOStyle, IStyle } from '@impulse-ui/core';
import { ButtonHTMLProps, TextButtonRestProps } from '../types';
import { Spinner } from '@impulse-ui/loader';

const baseTextButton: IStyle<ButtonHTMLProps> = {
  iTheme: {
    light: {
      color: volcano[60],
      backgroundColor: 'transparent',
      textShadowColor: volcano[60],
      ':hover': {
        backgroundColor: volcano[10],
        color: volcano[70],
        textShadowColor: volcano[70],
      },
      ':disabled': {
        color: volcano[40],
        backgroundColor: 'transparent',
        textShadowColor: volcano[40],
      },
      'data-component="spinner"': {
        borderRightColor: volcano[70],
      },
    },
    dark: {
      color: volcano[60],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    color: getThemeColor('color'),
    borderRadius: 4,
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    textTransform: 'uppercase',
    textShadow: `0 0 1px ${getThemeColor('textShadowColor')}`,
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
    '&:hover': {
      backgroundColor: getThemeColor('backgroundColor', ':hover'),
      color: getThemeColor('color', ':hover'),
      textShadow: `0 0 1px ${getThemeColor('textShadowColor', ':hover')}`,
      cursor: 'pointer',
      '&:not([disabled]) > [data-component="spinner"]': {
        borderRightColor: getThemeColor('borderRightColor', 'data-component="spinner"'),
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
      color: getThemeColor('color', ':disabled'),
      backgroundColor: getThemeColor('backgroundColor', ':disabled'),
      textShadow: `0 0 1px ${getThemeColor('textShadowColor', ':disabled')}`,
    },
  }),
};

const textButton: IOStyle<TextButtonRestProps> = {
  iTheme: {
    light: {
      loaderColor: volcano[60],
      ':disabled': {
        loaderColor: volcano[40],
      },
    },
  },
  iCss: ({ getComponentRef, getThemeColor }) => ({
    [getComponentRef(Spinner)]: {
      borderRightColor: getThemeColor('loaderColor'),
    },
  }),
};

export { baseTextButton, textButton };
