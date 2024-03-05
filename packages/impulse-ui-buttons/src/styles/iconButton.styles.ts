import { neutral } from '@impulse-ui/colours';
import { IconButtonStyle } from '@impulse-ui/types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: { iColorTheme: { light: { color: neutral[10] } } },
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
};

export { defaultIconButtonStyle };
