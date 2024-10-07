import { neutral, volcano } from '@impulse-ui/colours';
import { SelectStyle } from '../types';

const select: Partial<SelectStyle<any>> = {
  mainContainerStyle: {
    iTheme: {
      light: {
        backgroundColor: neutral[10],
        borderColor: volcano[60],
      },
    },
    iCss: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 28,
      position: 'relative',
      borderStyle: 'solid',
      height: 38,
      maxWidth: 250,
      width: '100%',
      minWidth: 128,
      borderRadius: 4,
      borderWidth: 1,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  clearButtonStyle: {
    buttonStyle: {
      iTheme: {
        light: {
          backgroundColor: neutral[10],
          ':focus': {
            backgroundColor: neutral[40],
          },
          ':hover': {
            backgroundColor: neutral[40],
          },
        },
      },
      iCss: ({ getThemeColor }) => ({
        filter: 'unset',
        height: 20,
        marginLeft: 'auto',
        width: 20,
        minHeight: 'unset',
        '&:focus': {
          background: getThemeColor('backgroundColor', ':focus'),
        },
      }),
    },
    iconStyle: {
      iTheme: {
        light: {
          color: neutral[60],
        },
      },
    },
  },
  selectedItemTypographyStyle: {
    iCss: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: `nowrap`,
      lineHeight: 1.5,
    },
  },
  selectPlaceholderStyle: {
    iTheme: {
      light: {
        color: neutral[80],
      },
    },
    iCss: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: `nowrap`,
      lineHeight: 1.5,
    },
  },
  selectOptionStyle: {
    typographyStyle: { iCss: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: 1.5 } },
  },
  dropdownIconStyle: {
    iTheme: {
      light: {
        color: neutral[60],
        backgroundColor: neutral[10],
      },
    },
    iCss: {
      position: 'absolute',
      filter: 'unset',
      marginRight: 'auto',
      height: 16,
      right: 8,
      width: 16,
      minHeight: 'unset',
    },
  },
  selectOptionsContainerStyle: {
    iTheme: {
      light: {
        backgroundColor: neutral[10],
      },
    },
    iCss: ({ loading }) => ({
      zIndex: 99,
      padding: loading ? 8 : '0 2px',
      display: 'block',
      maxHeight: 304,
      overflowY: loading ? 'hidden' : 'auto',
      borderRadius: 4,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      '&[data-popper-reference-hidden=true]': {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    }),
  },
  loadingSpinnerStyle: {
    iTheme: {
      light: {
        borderRightColor: volcano[60],
      },
    },
    iCss: {
      margin: 'auto',
    },
  },
  noOptionsTypographyStyle: {
    iCss: { textAlign: 'center', padding: 8 },
  },
};

export { select };
