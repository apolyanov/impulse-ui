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
      iColorTheme: { light: { backgroundColor: 'transparent' } },
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
          iconPrimaryColor: volcano[60],
          iconSecondaryColor: volcano[10],
          ':disabled': {
            iconSecondaryColor: volcano[40],
            iconPrimaryColor: volcano[10],
          },
        },
      },
      iCss: ({ getThemeColor }) => ({
        fontSize: 24,
        '--fa-primaty-opacity': 1,
        '--fa-primary-color': getThemeColor('iconPrimaryColor'),
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': getThemeColor('iconSecondaryColor'),
        '& .fa-secondary': {
          filter: `drop-shadow(0 0 36px rgba(0, 0, 0, 0.2))`,
        },
        '&:hover': {
          cursor: 'pointer',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          '--fa-primary-color': getThemeColor('iconPrimaryColor', ':disabled'),
          '--fa-secondary-color': getThemeColor('iconSecondaryColor', ':disabled'),
        },
      }),
    },
  },
  typographyStyle: { iCss: { fontSize: 14, margin: '0 6px' } },
};

export { checkboxStyle };
