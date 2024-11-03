import { volcano } from '@impulse-ui/colours';
import { IOStyle } from '@impulse-ui/core';
import { OCRScannerRestProps } from '../types';
import { UseScannerReturnType } from '@impulse-ui/scanner-core';

const ocrScannerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType> = {
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
    '.IMUI-OCRScanner-actions': {
      margin: 'auto',
      display: 'flex',
      gap: 8,
    },
    '.IMUI-OCRScanner-video': {
      position: 'relative',
      display: 'flex',
      padding: 16,
      '.IMUI-OCRScanner-video': {
        objectFit: 'cover',
        borderRadius: 4,
        width: '100%',
        aspectRatio: '1',
        display: isScanning ? 'block' : 'none',
      },
      '.IMUI-OCRScanner-placeholder-icon': {
        width: 288,
        height: '100%',
        aspectRatio: '1',
      },
      '.IMUI-OCRScanner-constraint': {
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

export { ocrScannerStyle };
