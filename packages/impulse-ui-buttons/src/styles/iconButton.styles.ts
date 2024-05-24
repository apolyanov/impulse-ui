import { neutral, volcano } from '@impulse-ui/colours';
import { IconButtonStyle } from '@impulse-ui/types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: {
    iColorTheme: { light: { color: neutral[10], ':disabled': { color: volcano[40] } } },
    iCss: ({ getThemeColor }) => ({
      color: getThemeColor('color'),
      '&[data-disabled="true"]': { color: getThemeColor('color', ':disabled') },
    }),
  },
  buttonStyle: {
    iCss: {
      padding: 0,
      minWidth: '38px',
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
