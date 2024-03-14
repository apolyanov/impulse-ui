import { neutral, volcano } from '@impulse-ui/colours';
import { ComponentTheme } from '@impulse-ui/types';

const button: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: volcano[60],
        backgroundColorHover: volcano[70],
        borderColor: volcano[60],
        borderColorHover: volcano[70],
        color: neutral[10],
        colorHover: neutral[10],
      },
      dark: {
        backgroundColor: volcano[60],
        backgroundColorHover: volcano[70],
        borderColor: volcano[60],
        borderColorHover: volcano[70],
        color: neutral[10],
        colorHover: neutral[10],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: iColorTheme.color,
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
      fontSize: '14px',
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      textTransform: 'uppercase',
      borderRadius: 4,
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: iColorTheme.backgroundColorHover,
        color: iColorTheme.colorHover,
        cursor: 'pointer',
      },
    }),
  },
};

export { button };
