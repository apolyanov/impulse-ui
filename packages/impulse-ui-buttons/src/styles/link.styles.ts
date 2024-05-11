import { volcano } from '@impulse-ui/colours';
import { ComponentTheme, LinkHTMLProps } from '@impulse-ui/types';

const link: ComponentTheme<LinkHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[60],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[60],
      },
    },
    iCss: ({ iColorTheme }) => ({
      color: iColorTheme.color,
      backgroundColor: iColorTheme.backgroundColor,
      width: 'fit-content',
      padding: 4,
      textTransform: 'none',
      borderRadius: 8,
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
};

export { link };
