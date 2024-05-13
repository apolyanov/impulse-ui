import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, ContainerHTMLProps } from '@impulse-ui/types';

const divider: ComponentTheme<ContainerHTMLProps> = {
  iStyle: {
    iColorTheme: {
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
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderRadius: 8,
      width: '100%',
      border: `1px solid ${iColorTheme.borderColor}`,
      padding: '0',
      margin: '4px 0',
    }),
  },
};

export { divider };
