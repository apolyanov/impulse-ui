import { neutral, volcano } from '@impulse-ui/colours';
import { ButtonHTMLProps, ButtonStyle, ComponentTheme } from '@impulse-ui/types';

const baseButton: ComponentTheme<ButtonHTMLProps> = {
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
    iCss: ({ iColorTheme, disabled }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: disabled ? volcano[40] : iColorTheme.color,
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
      '&:disabled': {
        backgroundColor: volcano[10],
        color: volcano[40],
        cursor: 'not-allowed',
      },
    }),
  },
};

const button: Partial<ButtonStyle> = {
  loaderStyle: {
    iColorTheme: {
      light: {
        borderColor: volcano[60],
        borderColorHover: neutral[60],
      },
    },
    iCss: ({ iColorTheme, disabled }) => ({
      borderRightColor: disabled ? volcano[60] : iColorTheme.borderColor,
    }),
  },
};

export { baseButton, button };
