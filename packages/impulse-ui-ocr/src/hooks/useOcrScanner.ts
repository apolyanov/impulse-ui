import { NotFoundException, useScanner } from '@impulse-ui/scanner-core';
import { OCRScannerRestProps, ScanningFn } from '@impulse-ui/types';
import { useCallback, useEffect, useState } from 'react';
import { createWorker, Worker } from 'tesseract.js';

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
