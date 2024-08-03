import { NotFoundException, ScanningFn, useScanner } from '@impulse-ui/scanner-core';
import { useCallback, useEffect, useState } from 'react';
import { Worker, createWorker } from 'tesseract.js';
import { OCRScannerRestProps } from '../types';

const useOcrScanner = (options: OCRScannerRestProps) => {
  const [worker, setWorker] = useState<Worker>();

  useEffect(() => {
    createWorker('eng').then((ocrWorker) => setWorker(ocrWorker));
  }, []);

  const decode: ScanningFn = useCallback(
    async ({ canvas }) => {
      if (worker) {
        const code = await worker.recognize(canvas.element);

        if (code) return code;

        throw new NotFoundException();
      }
    },
    [worker],
  );

  return useScanner({ ...options, scanningFn: decode });
};

export { useOcrScanner };
