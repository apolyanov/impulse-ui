import { volcano } from '@impulse-ui/colours';
import { ButtonHTMLProps, ComponentTheme, TextButtonStyle } from '@impulse-ui/types';

const baseTextButton: ComponentTheme<ButtonHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        color: volcano[60],
        textShadowColor: volcano[50],
        ':hover': {
          backgroundColor: volcano[10],
          color: volcano[70],
        },
        ':disabled': {
          color: volcano[40],
        },
      },
      dark: {
        color: volcano[60],
      },
    },
    iCss: ({ getThemeColor }) => ({
      backgroundColor: getThemeColor('backgroundColor'),
      color: getThemeColor('color'),
      borderRadius: 4,
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
      textTransform: 'uppercase',
      textShadow: `0 0 1px ${getThemeColor('textShadowColor')}`,
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
        backgroundColor: getThemeColor('backgroundColor', ':hover'),
        color: getThemeColor('color', ':hover'),
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
        borderRightColor: volcano[60],
        ':disabled': {
          borderRightColor: volcano[60],
        },
      },
    },
    iCss: ({ getThemeColor }) => ({
      borderRightColor: getThemeColor('backgroundColor'),
      '&[data-disabled="true"]': {
        borderRightColor: getThemeColor('backgroundColor', ':disabled'),
      },
    }),
  },
};

export { baseTextButton, textButton };
