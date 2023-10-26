import { neutral10 } from '@impulse-ui/colours';
import { ComponentTheme, IconStyleProps } from '@impulse-ui/types';

const icon: ComponentTheme<IconStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral10,
        colorHover: neutral10,
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral10,
        colorHover: neutral10,
      },
    },
    iCss: ({ iColorTheme }) => ({
      color: iColorTheme.color,
      fontSize: '16px',
    }),
  },
  iStyleProps: {
    hasDropShadow: true,
  },
};

export { icon };
