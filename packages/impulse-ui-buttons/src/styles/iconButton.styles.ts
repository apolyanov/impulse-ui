import { neutral, volcano } from '@impulse-ui/colours';
import { IconButtonStyle } from '@impulse-ui/types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: {
    iColorTheme: { light: { color: neutral[10] } },
    iCss: ({ iColorTheme, disabled }) => ({ color: disabled ? volcano[40] : iColorTheme.color }),
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
        borderColor: neutral[10],
        borderColorHover: neutral[10],
      },
    },
    iCss: ({ iColorTheme, disabled }) => ({
      borderRightColor: disabled ? volcano[60] : iColorTheme.borderColor,
    }),
  },
};

export { defaultIconButtonStyle };
