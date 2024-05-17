import { volcano } from '@impulse-ui/colours';
import { padding } from '@impulse-ui/core';
import { QRScannerStyle } from '@impulse-ui/types';

const qrScannerStyle: Partial<QRScannerStyle> = {
  mainContainerStyle: {
    iCss: {
      width: 320,
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  qrScannerContainerStyle: {
    iCss: {
      position: 'relative',
      display: 'flex',
      ...padding(16),
    },
  },
  topLeftQRCornerStyle: {
    iColorTheme: {
      light: {
        borderTopColor: volcano[60],
        borderLeftColor: volcano[60],
      },
    },
    iCss: ({ getThemeColor }) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: 50,
      height: 50,
      borderRadius: 4,
      borderTop: `4px solid ${getThemeColor('borderTopColor')}`,
      borderLeft: `4px solid ${getThemeColor('borderLeftColor')}`,
    }),
  },
  topRightQRCornerStyle: {
    iColorTheme: {
      light: {
        borderTopColor: volcano[60],
        borderRightColor: volcano[60],
      },
    },
    iCss: ({ getThemeColor }) => ({
      position: 'absolute',
      top: 0,
      right: 0,
      width: 50,
      height: 50,
      borderRadius: 4,
      borderTop: `4px solid ${getThemeColor('borderTopColor')}`,
      borderRight: `4px solid ${getThemeColor('borderRightColor')}`,
    }),
  },
  bottomLeftQRCornerStyle: {
    iColorTheme: {
      light: {
        borderLeftColor: volcano[60],
        borderBottomColor: volcano[60],
      },
    },
    iCss: ({ getThemeColor }) => ({
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 50,
      height: 50,
      borderRadius: 4,
      borderLeft: `4px solid ${getThemeColor('borderLeftColor')}`,
      borderBottom: `4px solid ${getThemeColor('borderBottomColor')}`,
    }),
  },
  bottomRightQRCornerStyle: {
    iColorTheme: {
      light: {
        borderRightColor: volcano[60],
        borderBottomColor: volcano[60],
      },
    },
    iCss: ({ getThemeColor }) => ({
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 50,
      height: 50,
      borderRadius: 4,
      borderRight: `4px solid ${getThemeColor('borderRightColor')}`,
      borderBottom: `4px solid ${getThemeColor('borderBottomColor')}`,
    }),
  },
  videoStyle: {
    iCss: ({ isScanning }) => ({
      objectFit: 'cover',
      borderRadius: 4,
      width: '100%',
      aspectRatio: '1',
      display: isScanning ? 'block' : 'none',
    }),
  },
  placeholderIconStyle: {
    iCss: { width: 288, height: '100%', aspectRatio: '1' },
  },
  buttonsContainerStyle: { iCss: { margin: 'auto', display: 'flex', gap: 8 } },
};

export { qrScannerStyle };
