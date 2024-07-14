import { QRCode } from 'jsqr-es6';
import { RefObject } from 'react';

interface VideoData {
  element: HTMLVideoElement;
  stream: MediaStream;
}

interface CanvasData {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

interface ScanningFnArgs {
  image: ImageData;
  canvas: CanvasData;
  video: VideoData;
}

interface ScanningFn<T = any> {
  (args: ScanningFnArgs): T | Promise<T>;
}

interface UseScannerReturnProps {
  videoElement: RefObject<HTMLVideoElement>;
  toggleScanning: () => Promise<void>;
  toggleTorch: () => void;
  cameraCapabilities: CameraCapabilities | undefined;
  canUseTorch: boolean | undefined;
  isScanning: boolean;
  isTorchOn: boolean;
}

interface MinMaxCapability {
  min?: number;
  max?: number;
}

interface CameraCapabilities extends MediaTrackCapabilities {
  torch?: boolean;
  zoom?: MinMaxCapability;
  focusDistance?: MinMaxCapability;
}

interface UseScannerProps<T = any> extends ScannerRestProps<T> {}

interface ScannerRestProps<T = any> {
  scanningInterval: number;
  scanningFn: ScanningFn<T>;
  onSuccess: (result: T) => void;
  onError?: (error: Error) => void;
}

export type {
  CanvasData,
  QRCode,
  ScannerRestProps,
  ScanningFn,
  ScanningFnArgs,
  UseScannerProps,
  VideoData,
  CameraCapabilities,
  UseScannerReturnProps,
};
