import { IComponent } from '@impulse-ui/core';
import { ScannerRestProps, UseScannerReturnType } from '@impulse-ui/scanner-core';
import { RecognizeResult } from 'tesseract.js';

interface OCRScannerProps extends OCRScannerRestProps, IComponent<OCRScannerRestProps & UseScannerReturnType> {}

interface OCRScannerRestProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerProps extends Omit<ScannerRestProps<RecognizeResult>, 'scanningFn'> {}
interface UseOCRScannerReturnProp extends UseScannerReturnType {}

export type { OCRScannerProps, OCRScannerRestProps, UseOCRScannerProps, UseOCRScannerReturnProp };
