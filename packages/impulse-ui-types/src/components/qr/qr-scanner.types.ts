import { RefObject } from 'react';
import { QRCode } from 'jsqr-es6';

import { IconButtonStyle } from '../buttons';
import { IOStyle } from '../theme';

interface QRScannerProps extends QRScannerRestProps {
  iStyle?: Partial<QRScannerStyle>;
}

interface QRScannerRestProps {
  scanningInterval: number;
  onSuccess: (result: QRCode) => void;
  onError: (error: Error) => void;
}

interface QRScannerStyle {
  mainContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  qrScannerContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  buttonsContainerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  toggleScanningButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseQrScannerReturnProps>>;
  toggleTorchButtonStyle: Partial<IconButtonStyle<QRScannerRestProps & UseQrScannerReturnProps>>;
  topLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  topRightQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  bottomLeftQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  bottomRightQRCornerStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  placeholderIconStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
  videoStyle: IOStyle<QRScannerRestProps & UseQrScannerReturnProps>;
}

interface UseQrScannerReturnProps {
  videoElement: RefObject<HTMLVideoElement>;
  toggleScanning: () => Promise<void>;
  toggleTorch: () => void;
  cameraCapabilities: CameraCapabilities | undefined;
  canUseTorch: boolean | undefined;
  isScanning: boolean;
  isTorchOn: boolean;
}

interface CameraCapabilities extends MediaTrackCapabilities {
  torch?: boolean;
  zoom?: MinMaxCapability;
  focusDistance?: MinMaxCapability;
}

interface MinMaxCapability {
  min?: number;
  max?: number;
}

export type {
  CameraCapabilities,
  MinMaxCapability,
  QRScannerProps,
  QRScannerRestProps,
  QRScannerStyle,
  UseQrScannerReturnProps,
};
