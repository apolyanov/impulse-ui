import { volcano } from '@impulse-ui/colours';
import { QRScannerRestProps, UseQrScannerReturnProps } from '../types';
import { IOStyle } from '@impulse-ui/core';

const qrScannerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps> = {
  iTheme: {
    light: {
      constraintColor: volcano[60],
    },
  },
  iCss: ({ getThemeColor, isScanning }) => ({
    width: 320,
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '.IMUI-QRScanner-actions': {
      margin: 'auto',
      display: 'flex',
      gap: 8,
    },
    '.IMUI-QRScanner-video': {
      position: 'relative',
      display: 'flex',
      padding: 16,
      '.IMUI-QRScanner-video': {
        objectFit: 'cover',
        borderRadius: 4,
        width: '100%',
        aspectRatio: '1',
        display: isScanning ? 'block' : 'none',
      },
      '.IMUI-QRScanner-placeholder-icon': {
        width: 288,
        height: '100%',
        aspectRatio: '1',
      },
      '.IMUI-QRScanner-constraint': {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 4,
        '.top-left': {
          top: 0,
          left: 0,
          borderTop: `4px solid ${getThemeColor('constraintColor')}`,
          borderLeft: `4px solid ${getThemeColor('constraintColor')}`,
        },
        '.top-right': {
          top: 0,
          right: 0,
          borderTop: `4px solid ${getThemeColor('constraintColor')}`,
          borderLeft: `4px solid ${getThemeColor('constraintColor')}`,
        },
        '.bottom-left': {
          bottom: 0,
          left: 0,
          borderTop: `4px solid ${getThemeColor('constraintColor')}`,
          borderLeft: `4px solid ${getThemeColor('constraintColor')}`,
        },
        '.bottom-right': {
          bottom: 0,
          right: 0,
          borderTop: `4px solid ${getThemeColor('borderTopColor')}`,
          borderLeft: `4px solid ${getThemeColor('borderLeftColor')}`,
        },
      },
    },
  }),
};

export { qrScannerStyle };
