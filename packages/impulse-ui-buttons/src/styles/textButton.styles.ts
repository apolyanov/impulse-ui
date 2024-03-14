import { volcano } from '@impulse-ui/colours';
import { ComponentTheme } from '@impulse-ui/types';

const textButton: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[50],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[50],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
      borderRadius: 8,
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease-in-out',
      textTransform: 'uppercase',
      textShadow: `0 0 1px ${volcano[50]}`,
      padding: '0px 28px',
      margin: '8px 0',
      minWidth: '128px',
      width: 'fit-content',
      maxWidth: '256px',
      minHeight: '38px',
      height: 'fit-content',
      maxHeight: '76px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
};

export { textButton };
