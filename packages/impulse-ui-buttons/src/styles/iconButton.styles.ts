import { neutral, volcano } from '@impulse-ui/colours';
import { IconButtonStyle } from '@impulse-ui/types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: {
    iColorTheme: { light: { color: neutral[10], ':disabled': { color: neutral[40] } } },
    iCss: ({ getThemeColor }) => ({
      color: getThemeColor('color'),
      '&:disabled': { color: getThemeColor('color', ':disabled') },
    }),
  },
  buttonStyle: {
    iCss: {
      padding: 0,
      minWidth: 'unset',
      height: '38px',
      width: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  loaderStyle: {
    iColorTheme: {
      light: {
        borderRightColor: volcano[10],
        ':disabled': {
          borderRightColor: volcano[60],
        },
      },
    },
    iCss: ({ getThemeColor }) => ({
      borderRightColor: getThemeColor('backgroundColor'),
      '&[data-disabled="true"]': {
        borderRightColor: getThemeColor('backgroundColor', ':disabled'),
      },
    }),
  },
};

export { defaultIconButtonStyle };
