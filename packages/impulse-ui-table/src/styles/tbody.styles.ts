import { neutral, volcano } from '@impulse-ui/colours';

const baseTBody = {
  iTheme: {
    light: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: neutral[200],
    },
  },
  iCss: ({ getThemeColor }) => ({
    backgroundColor: getThemeColor('backgroundColor'),
  }),
};

const tbody = {
  noContentTdataStyle: {
    iCss: {
      width: '100%',
      height: 300,
      textAlign: 'center',
    },
  },
  tbodyStyle: {
    iCss: { position: 'relative' },
  },
  noContentTbodyStyle: {
    iCss: ({ loading }) => ({ position: 'relative', height: loading ? '300px' : 'unset' }),
  },
  noContentTrowStyle: { iCss: ({ loading }) => ({ opacity: loading ? 0.2 : 1 }) },
  trowStyle: { iCss: ({ loading }) => ({ opacity: loading ? 0.2 : 1 }) },
  noContentIconStyle: { iTheme: { light: { color: neutral[80] } }, iCss: { fontSize: 56 } },
  noContentTypographyStyle: { iCss: { marginTop: 8 } },
  loaderSpinnerStyle: {
    iTheme: {
      light: {
        borderRightColor: volcano[60],
      },
    },
    iCss: {
      zIndex: 1,
      margin: 'auto',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: 80,
      position: 'absolute',
      border: '5px solid #0000',
      '&:before': {
        inset: -5,
      },
      '&:after': {
        inset: -5,
      },
    },
  },
};

export { baseTBody, tbody };
