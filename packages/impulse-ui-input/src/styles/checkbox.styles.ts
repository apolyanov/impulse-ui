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
          color: volcano[60],
        },
      },
      iCss: {
        fontSize: 24,
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': volcano[10],
        '& .fa-secondary': {
          filter: `drop-shadow(0 0 36px rgba(0, 0, 0, 0.2))`,
        },
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  typographyStyle: { iCss: { fontSize: 14, margin: '0 6px' } },
};

export { checkboxStyle };
