import { RecognizeResult } from 'tesseract.js';
import { ScannerRestProps, UseScannerReturnType } from '@impulse-ui/scanner-core';
import { IOStyle } from '@impulse-ui/core';
import { IconButtonStyle } from '@impulse-ui/buttons';

interface OCRScannerProps extends OCRScannerRestProps {
  iStyle?: Partial<OCRScannerStyle>;
}

interface OCRScannerRestProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerReturnProp extends UseScannerReturnType {}

interface OCRScannerStyle {
  mainContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  qrScannerContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  buttonsContainerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  toggleScanningButtonStyle: Partial<IconButtonStyle<OCRScannerRestProps & UseScannerReturnType>>;
  toggleTorchButtonStyle: Partial<IconButtonStyle<OCRScannerRestProps & UseScannerReturnType>>;
  topLeftQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  topRightQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  bottomLeftQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  bottomRightQRCornerStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  placeholderIconStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
  videoStyle: IOStyle<OCRScannerRestProps & UseScannerReturnType>;
}

export type { OCRScannerProps, OCRScannerRestProps, OCRScannerStyle, UseOCRScannerProps, UseOCRScannerReturnProp };
