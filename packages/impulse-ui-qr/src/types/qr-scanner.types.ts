import { IComponent } from '@impulse-ui/core';
import { ScannerRestProps, UseScannerReturnType } from '@impulse-ui/scanner-core';

interface QRScannerProps extends QRScannerRestProps, IComponent<QRScannerRestProps & UseQrScannerReturnProps> {}

interface QRScannerRestProps extends Omit<ScannerRestProps, 'scanningFn'> {}
interface UseQrScannerProps extends Omit<ScannerRestProps, 'scanningFn'> {}
interface UseQrScannerReturnProps extends UseScannerReturnType {}

export type { QRScannerProps, QRScannerRestProps, UseQrScannerProps, UseQrScannerReturnProps };
