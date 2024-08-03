import { NotFoundException, ScanningFn, useScanner } from '@impulse-ui/scanner-core';
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';
import { useCallback } from 'react';
import { QRScannerRestProps } from '../types';

const createWorker = createWorkerFactory(() => import('./jsQR'));

const useQrScanner = (options: QRScannerRestProps) => {
  const worker = useWorker(createWorker);

  const decode: ScanningFn = useCallback(
    async ({ image }) => {
      const code = await worker.jsQR(image.data, image.width, image.height);

      if (code) return code;

      throw new NotFoundException();
    },
    [worker],
  );

  return useScanner({ ...options, scanningFn: decode });
};

export { useQrScanner };
