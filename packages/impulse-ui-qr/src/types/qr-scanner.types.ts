import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { ScannerRestProps, UseScannerReturnType } from '@impulse-ui/scanner-core';

interface QRScannerProps extends QRScannerRestProps {
  iStyle?: Partial<QRScannerStyle>;
}

interface QRScannerRestProps extends Omit<ScannerRestProps, 'scanningFn'> {}
interface UseQrScannerProps extends Omit<ScannerRestProps, 'scanningFn'> {}
interface UseQrScannerReturnProps extends UseScannerReturnType {}

interface QRScannerStyle {
  mainContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  qrScannerContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  buttonsContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  toggleScanningButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseQrScannerReturnProps>>;
  toggleTorchButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseQrScannerReturnProps>>;
  topLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  topRightQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  bottomLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  bottomRightQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  placeholderIconStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  videoStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
}

export type { QRScannerProps, QRScannerRestProps, QRScannerStyle, UseQrScannerProps, UseQrScannerReturnProps };
