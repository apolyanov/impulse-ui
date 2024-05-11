import { neutral, volcano } from '@impulse-ui/colours';
import { ButtonHTMLProps, ComponentTheme, TextButtonStyle } from '@impulse-ui/types';

const baseTextButton: ComponentTheme<ButtonHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: volcano[10],
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: volcano[60],
        colorHover: volcano[70],
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
    iCss: ({ iColorTheme, disabled }) => ({
      backgroundColor: iColorTheme.backgroundColor,
      color: disabled ? volcano[40] : iColorTheme.color,
      borderRadius: 4,
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
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
      '&:disabled': {
        cursor: 'not-allowed',
        color: volcano[40],
        textShadow: `0 0 1px ${volcano[40]}`,
      },
    }),
  },
};

const textButton: Partial<TextButtonStyle> = {
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

export { baseTextButton, textButton };
