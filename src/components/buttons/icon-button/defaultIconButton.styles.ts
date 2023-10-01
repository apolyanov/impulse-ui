import { neutral1 } from '../../theme';
import { IconButtonStyle } from '../types';

const defaultIconButtonStyle: Partial<IconButtonStyle> = {
  iconStyle: { iColorTheme: { light: { color: neutral1 } } },
  buttonStyle: {
    iCss: () => ({
      padding: 0,
      minWidth: 'unset',
      height: '38px',
      width: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
};

export { defaultIconButtonStyle };
