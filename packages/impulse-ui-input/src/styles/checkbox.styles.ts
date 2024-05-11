import { volcano } from '@impulse-ui/colours';
import { CheckboxStyle } from '@impulse-ui/types';

const checkboxStyle: Partial<CheckboxStyle> = {
  mainContainerStyle: {
    iCss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      margin: '8px 0',
    },
  },
  iconButtonStyle: {
    buttonStyle: {
      iColorTheme: { light: { backgroundColor: 'transparent', backgroundColorHover: 'transparent' } },
      iCss: {
        backgroundColor: 'unset',
        '&:disabled': {
          backgroundColor: 'unset',
        },
        minWidth: 'unset',
        width: 'unset',
        minHeight: 'unset',
        height: 'unset',
        padding: 0,
        margin: 0,
      },
    },
    iconStyle: {
      iColorTheme: {
        light: {
          backgroundColor: volcano[60],
          color: volcano[10],
        },
      },
      iCss: ({ iColorTheme, disabled }) => ({
        fontSize: 24,
        '--fa-primaty-opacity': 1,
        '--fa-primary-color': disabled ? volcano[40] : iColorTheme.backgroundColor,
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': iColorTheme.color,
        '& .fa-secondary': {
          filter: `drop-shadow(0 0 36px rgba(0, 0, 0, 0.2))`,
        },
        '&:hover': {
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      }),
    },
  },
  typographyStyle: { iCss: { fontSize: 14, margin: '0 6px' } },
};

export { checkboxStyle };
