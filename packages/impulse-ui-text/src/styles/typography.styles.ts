import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TypographyHTMLProps } from '@impulse-ui/types';

const typography: ComponentTheme<TypographyHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      fontSize: '14px',
      '&:hover': {
        cursor: 'inherit',
      },
    }),
  },
};

export { typography };
