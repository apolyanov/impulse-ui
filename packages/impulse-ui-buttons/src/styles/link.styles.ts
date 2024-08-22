import { volcano } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { LinkHTMLProps } from '../types';

const link: IStyle<LinkHTMLProps> = {
  iColorTheme: {
    light: {
      backgroundColor: 'transparent',
      color: volcano[60],
      ':disabled': {
        backgroundColor: 'transparent',
        color: volcano[40],
      },
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: volcano[60],
    },
  },
  iCss: ({ getThemeColor }) => ({
    color: getThemeColor('color'),
    backgroundColor: getThemeColor('backgroundColor'),
    width: 'fit-content',
    padding: 4,
    textTransform: 'none',
    borderRadius: 8,
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

export { link };
