import { volcano } from '@impulse-ui/colours';
import { IOStyle } from '@impulse-ui/core';
import { CompositeCheckboxProps } from '../types';

const checkboxStyle: IOStyle<CompositeCheckboxProps> = {
  iTheme: {
    light: {
      iconPrimaryColor: volcano[60],
      iconSecondaryColor: volcano[10],
      ':hover': { backgroundColor: 'transparent' },
      ':disabled': {
        backgroundColor: 'transparent',
        iconPrimaryColor: volcano[40],
        iconSecondaryColor: volcano[10],
      },
    },
  },
  iCss: ({ getThemeColor }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: '8px 0',
    '.IMUI-Checkbox-label': { fontSize: 14, margin: '0 6px' },
    '.IMUI-Checkbox-icon-button': {
      backgroundColor: 'unset',
      minWidth: 'unset',
      width: 'unset',
      maxWidth: 'unset',
      minHeight: 'unset',
      height: 'unset',
      maxHeight: 'unset',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        '.IMUI-Icon': {
          '--fa-primary-color': getThemeColor('iconPrimaryColor', ':disabled'),
          '--fa-secondary-color': getThemeColor('iconSecondaryColor', ':disabled'),
        },
      },
      '.IMUI-Icon': {
        fontSize: 24,
        '--fa-primaty-opacity': 1,
        '--fa-primary-color': getThemeColor('iconPrimaryColor'),
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': getThemeColor('iconSecondaryColor'),
        '& .fa-secondary': {
          filter: `drop-shadow(0 0 36px rgba(0, 0, 0, 0.2))`,
        },
      },
    },
  }),
};

export { checkboxStyle };
