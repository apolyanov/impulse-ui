import { neutral, volcano } from '@impulse-ui/colours';
import { IOStyle } from '@impulse-ui/core';
import { IconButtonRestProps } from '../types';
import { Spinner } from '@impulse-ui/loader';
import { Icon } from '@impulse-ui/icon';

const defaultIconButtonStyle: IOStyle<IconButtonRestProps> = {
  iTheme: {
    light: {
      color: neutral[10],
      loaderColor: neutral[10],
      ':disabled': {
        color: volcano[40],
        loaderColor: volcano[40],
      },
    },
  },
  iCss: ({ getComponentRef, getThemeColor }) => ({
    padding: 0,
    minWidth: 'unset',
    aspectRatio: '1',
    height: '38px',
    width: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [getComponentRef(Spinner)]: {
      borderRightColor: getThemeColor('loaderColor'),
    },
    [getComponentRef(Icon)]: {
      color: getThemeColor('color'),
    },
    '&:disabled': {
      [getComponentRef(Spinner)]: {
        borderRightColor: getThemeColor('loaderColor', ':disabled'),
      },
      [getComponentRef(Icon)]: {
        color: getThemeColor('color', ':disabled'),
      },
    },
  }),
};

export { defaultIconButtonStyle };
