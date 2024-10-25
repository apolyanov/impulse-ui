import { neutral } from '@impulse-ui/colours';
import { IStyle } from '@impulse-ui/core';
import { ContainerHTMLProps } from '../types';

const divider: IStyle<ContainerHTMLProps> = {
  iTheme: {
    light: {
      backgroundColor: 'transparent',
      borderColor: neutral[100],
      color: 'transparent',
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: neutral[100],
      color: 'transparent',
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
    color: getThemeColor('color'),
    borderRadius: 8,
    width: '100%',
    border: `1px solid ${getThemeColor('borderColor')}`,
    padding: '0',
    margin: '4px 0',
  }),
};

export { divider };
