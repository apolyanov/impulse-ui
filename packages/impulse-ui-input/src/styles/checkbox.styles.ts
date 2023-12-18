import { volcano1, volcano6 } from '@impulse-ui/colours';
import { CheckboxStyle, CheckboxStyleProps } from '@impulse-ui/types';

const checkboxStyle: Partial<CheckboxStyle> = {
  mainContainerStyle: {
    iCss: {
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
          color: volcano6,
        },
      },
      iCss: {
        fontSize: '20px',
        '--fa-secondary-opacity': 1,
        '--fa-secondary-color': volcano1,
        '& .fa-secondary': {
          filter: `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`,
        },
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  typographyStyle: { iCss: { fontSize: '12px', margin: '0 6px' } },
};

const checkboxStyleProps: Partial<CheckboxStyleProps> = {
  iconButtonStyleProps: {
    buttonStyleProps: { hasDropShadow: false, hasBorderRadius: false },
  },
};

export { checkboxStyle, checkboxStyleProps };
