import { neutral, volcano } from '@impulse-ui/colours';
import { SelectStyle } from '@impulse-ui/types';

const select: Partial<SelectStyle<any>> = {
  mainContainerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
        borderColor: volcano[60],
        borderColorHover: volcano[50],
      },
    },
    iCss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 8px',
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      borderStyle: 'solid',
      height: 38,
      maxWidth: 250,
      borderRadius: 4,
      borderWidth: 1,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  dropdownIconButtonStyle: {
    buttonStyle: {
      iColorTheme: {
        light: {
          backgroundColor: neutral[10],
          backgroundColorHover: neutral[40],
        },
      },
      iCss: {
        position: 'absolute',
        filter: 'unset',
        marginRight: 'auto',
        height: 20,
        right: 8,
        width: 20,
        minHeight: 'unset',
      },
    },
    iconStyle: {
      iColorTheme: {
        light: {
          color: neutral[60],
          colorHover: neutral[60],
        },
      },
    },
  },
  selectOptionsContainerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[10],
      },
    },
    iCss: {
      zIndex: 99,
      padding: '0 2px',
      display: 'block',
      maxHeight: 304,
      overflowY: 'auto',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '&[data-popper-reference-hidden=true]': {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    },
  },
  loadingTypographyStyle: {
    iCss: { textAlign: 'center', padding: '4px' },
  },
  noOptionsTypographyStyle: {
    iCss: { textAlign: 'center', padding: '4px' },
  },
};

export { select };
