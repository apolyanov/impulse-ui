import { IconButtonStyle } from '../buttons';
import { ScannerRestProps, UseScannerReturnProps } from '../scanner';
import { IOStyle } from '../theme';
import { QRCode } from 'jsqr-es6';

interface QRScannerProps extends QRScannerRestProps {
  iStyle?: Partial<QRScannerStyle>;
}

interface QRScannerRestProps extends Omit<ScannerRestProps<QRCode>, 'scanningFn'> {}
interface UseQrScannerProps extends Omit<ScannerRestProps<QRCode>, 'scanningFn'> {}
interface UseQrScannerReturnProp extends UseScannerReturnProps {}

interface QRScannerStyle {
  mainContainerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  qrScannerContainerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  buttonsContainerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  toggleScanningButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseScannerReturnProps>>;
  toggleTorchButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseScannerReturnProps>>;
  topLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  topRightQRCornerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  bottomLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  bottomRightQRCornerStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  placeholderIconStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
  videoStyle: IOStyle<QRScannerRestProps & UseScannerReturnProps>;
}

export type { QRScannerProps, QRScannerRestProps, QRScannerStyle, UseQrScannerProps, UseQrScannerReturnProp };
