import { neutral, volcano } from '@impulse-ui/colours';
import { IOStyle } from '@impulse-ui/core';
import { SelectRestProps } from '../types';

const select: IOStyle<SelectRestProps<any>> = {
  iTheme: {
    light: {
      backgroundColor: neutral[10],
      borderColor: volcano[60],
      iconColor: neutral[80],
      clearButtonBackgroundColor: neutral[10],
      ':focus': {
        clearButtonBackgroundColor: neutral[40],
      },
      ':hover': {
        clearButtonBackgroundColor: neutral[40],
      },
      ':disabled': {
        borderColor: volcano[20],
        iconColor: neutral[60],
      },
    },
  },
  iCss: ({ getThemeColor }) => ({
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
    backgroundColor: getThemeColor('backgroundColor'),
    borderColor: getThemeColor('borderColor'),
    '&[data-disabled="true"]': {
      borderColor: getThemeColor('borderColor', ':disabled'),
    },
    '.IMUI-Select-selected-value': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: `nowrap`,
      lineHeight: 1.5,
    },
    '.IMUI-Select-clear-button': {
      position: 'absolute',
      filter: 'unset',
      marginRight: 'auto',
      height: 20,
      right: 8,
      width: 20,
      minHeight: 'unset',
      '.IMUI-Icon': {
        color: getThemeColor('iconColor'),
      },
      background: getThemeColor('clearButtonBackgroundColor'),
      '&:focus': {
        background: getThemeColor('clearButtonBackgroundColor', ':focus'),
      },
      '&:hover': {
        background: getThemeColor('clearButtonBackgroundColor', ':hover'),
      },
    },
  }),
  // selectOptionStyle: {
  //   typographyStyle: { iCss: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: 1.5 } },
  // },
  // dropdownIconStyle: {
  //   iTheme: {
  //     light: {
  //       color: neutral[60],
  //       backgroundColor: neutral[10],
  //     },
  //   },
  //   iCss: {
  //     position: 'absolute',
  //     filter: 'unset',
  //     marginRight: 'auto',
  //     height: 16,
  //     right: 8,
  //     width: 16,
  //     minHeight: 'unset',
  //   },
  // },
  // selectOptionsContainerStyle: {
  //   iTheme: {
  //     light: {
  //       backgroundColor: neutral[10],
  //     },
  //   },
  //   iCss: ({ loading }) => ({
  //     zIndex: 99,
  //     padding: loading ? 8 : '0 2px',
  //     display: 'block',
  //     maxHeight: 304,
  //     overflowY: loading ? 'hidden' : 'auto',
  //     borderRadius: 4,
  //     filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
  //     '&[data-popper-reference-hidden=true]': {
  //       visibility: 'hidden',
  //       pointerEvents: 'none',
  //     },
  //   }),
  // },
  // loadingSpinnerStyle: {
  //   iTheme: {
  //     light: {
  //       borderRightColor: volcano[60],
  //     },
  //   },
  //   iCss: {
  //     margin: 'auto',
  //   },
  // },
  // noOptionsTypographyStyle: {
  //   iCss: { textAlign: 'center', padding: 8 },
  // },
};

export { select };
