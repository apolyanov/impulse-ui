import { neutral, volcano } from '@impulse-ui/colours';
import { IconButtonStyle } from '../types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: {
    iTheme: { light: { color: neutral[10], ':disabled': { color: volcano[40] } } },
    iCss: ({ getThemeColor }) => ({
      color: getThemeColor('color'),
      '&[data-disabled="true"]': { color: getThemeColor('color', ':disabled') },
    }),
  },
  buttonStyle: {
    iCss: {
      padding: 0,
      minWidth: 'unset',
      aspectRatio: '1',
      height: '38px',
      width: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  loaderStyle: {
    iTheme: {
      light: {
        borderRightColor: neutral[10],
        ':disabled': {
          borderRightColor: volcano[40],
        },
      },
    },
    iCss: ({ getThemeColor }) => ({
      borderRightColor: getThemeColor('borderRightColor'),
      '&[data-disabled="true"]': {
        borderRightColor: getThemeColor('borderRightColor', ':disabled'),
      },
    }),
  },
};

export { defaultIconButtonStyle };
