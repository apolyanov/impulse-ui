import { NotFoundException, useScanner } from '@impulse-ui/scanner-core';
import { QRScannerRestProps, ScanningFn } from '@impulse-ui/types';
import jsQR from 'jsqr-es6';

const decode: ScanningFn = ({ image }) => {
  const code = jsQR(image.data, image.width, image.height);

  if (code) return code;

  throw new NotFoundException();
};

const useQrScanner = (options: QRScannerRestProps) => useScanner({ ...options, scanningFn: decode });

export { useQrScanner };
