import { QRCode } from 'jsqr-es6';

interface VideoData {
  videoElement: HTMLVideoElement;
  videoStream: MediaStream;
}

interface CanvasData {
  canvasElement: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
}

interface ScanningFnArgs {
  imageData: ImageData;
  canvasData: CanvasData;
  videoData: VideoData;
}

interface ScanningFn<T = any> {
  (args: ScanningFnArgs): T | Promise<T>;
}

interface UseScannerProps<T = any> extends ScannerRestProps<T> {}

interface ScannerRestProps<T = any> {
  scanningInterval: number;
  scanningFn: ScanningFn<T>;
  onSuccess: (result: T) => void;
  onError?: (error: Error) => void;
}

export type { CanvasData, QRCode, ScannerRestProps, ScanningFn, ScanningFnArgs, UseScannerProps, VideoData };
