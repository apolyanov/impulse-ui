import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const icon: IStyle<FontAwesomeIconProps> = {
  iTheme: {
    light: {
      color: neutral[100],
    },
    dark: {
      color: neutral[100],
    },
  },
  iCss: ({ getThemeColor }) => ({
    color: getThemeColor('color'),
    fontSize: '16px',
  }),
};

export { icon };
