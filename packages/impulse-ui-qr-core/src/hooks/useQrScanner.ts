import { useRef, useState } from 'react';
import { CameraCapabilities, QRScannerRestProps } from '@impulse-ui/types';

import { Scanner } from '../scanner';

const useQrScanner = (options: QRScannerRestProps) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const cameraControls = useRef();
  const qrScanner = useRef(new Scanner(options.scanningInterval));

  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);
  const [cameraCapabilities, setCameraCapabilities] = useState<CameraCapabilities>();

  const canUseTorch = cameraCapabilities?.torch;

  const toggleScanning = async () => {
    if (!isScanning && videoElement.current) {
      await qrScanner.current.scan(videoElement.current, options.onSuccess, options.onError);
      setIsScanning(true);
    } else {
      stopScanning();
    }
  };

  const setupCameraControls = (controls: any) => {};

  const stopScanning = () => {
    qrScanner.current.stop();
    setIsScanning(false);
  };

  const toggleTorch = () => {
    const newTorchState = !isTorchOn;
  };

  return { videoElement, toggleScanning, toggleTorch, cameraCapabilities, canUseTorch, isScanning, isTorchOn };
};

export { useQrScanner };
