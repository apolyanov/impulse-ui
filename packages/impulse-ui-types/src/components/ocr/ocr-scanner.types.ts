import { IconButtonStyle } from '../buttons';
import { ScannerRestProps, UseScannerReturnProps } from '../scanner';
import { IOStyle } from '../theme';
import { RecognizeResult } from 'tesseract.js';

interface OCRScannerProps extends OCRScannerRestProps {
  iStyle?: Partial<OCRScannerStyle>;
}

interface OCRScannerRestProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerReturnProp extends UseScannerReturnProps {}

interface OCRScannerStyle {
  mainContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  qrScannerContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  buttonsContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  toggleScanningButtonStyle: Partial<IconButtonStyle<OCRScannerRestProps & UseScannerReturnProps>>;
  toggleTorchButtonStyle: Partial<IconButtonStyle<OCRScannerRestProps & UseScannerReturnProps>>;
  topLeftQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  topRightQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  bottomLeftQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  bottomRightQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  placeholderIconStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
  videoStyle: IOStyle<OCRScannerRestProps & UseScannerReturnProps>;
}

export type { OCRScannerProps, OCRScannerRestProps, OCRScannerStyle, UseOCRScannerProps, UseOCRScannerReturnProp };
