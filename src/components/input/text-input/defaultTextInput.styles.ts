import { neutral1, neutral4, neutral6, neutral8, volcano5, volcano6 } from '../../theme';
import { TextInputStyle, TextInputStyleProps } from '../types';

const defaultTextInputStyle: Partial<TextInputStyle> = {
  mainContainerStyle: {
    iCss: () => ({
      width: '100%',
      maxWidth: '250px',
      margin: '8px 0',
      padding: 0,
    }),
  },
  inputContainerStyle: {
    iColorTheme: {
      light: {
        borderColor: volcano6,
        borderColorHover: volcano5,
      },
    },
    iCss: () => ({
      margin: '0',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      borderStyle: 'solid',
      height: '38px',
      borderRadius: '4px',
      borderWidth: '1px',
    }),
  },
  inputStyle: {
    iCss: (iColorTheme, iProps, parentProps) => ({
      marginRight: parentProps?.clearable ? '26px' : 0,
    }),
  },
  iconStyle: {
    iColorTheme: {
      light: {
        color: neutral8,
      },
    },
    iCss: () => ({
      fontSize: '20px',
      width: '20px',
      marginRight: '4px',
    }),
  },
  clearIconStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral1,
          backgroundColorHover: neutral4,
        },
      },
      iCss: (iColorTheme) => ({
        margin: 0,
        position: 'absolute',
        marginRight: 'auto',
        height: '24px',
        right: '8px',
        width: '24px',
        minHeight: 'unset',
        '&:focus': {
          background: iColorTheme.backgroundColorHover,
        },
      }),
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral6,
          colorHover: neutral6,
        },
      },
    },
  },
};

const defaultTextInputStyleProps: Partial<TextInputStyleProps> = {
  clearIconStyleProps: {
    buttonStyleProps: {
      hasDropShadow: false,
    },
  },
  inputContainerStyleProps: {
    hasDropShadow: true,
  },
};

export { defaultTextInputStyle, defaultTextInputStyleProps };
