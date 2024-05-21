import { useRef, useState } from 'react';
import { CameraCapabilities, QRScannerRestProps } from '@impulse-ui/types';

import { Scanner } from '../scanner';

const useQrScanner = (options: QRScannerRestProps) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const qrScanner = useRef(new Scanner(options.scanningInterval));

  const [cameraCapabilities, setCameraCapabilities] = useState<CameraCapabilities>();
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);

  const toggleScanning = async () => {
    if (!isScanning && videoElement.current) {
      qrScanner.current.scan(videoElement.current, options.onSuccess, options.onError).then((camera) => {
        setCameraCapabilities(camera);
        setIsScanning(true);
      });
    } else {
      stopScanning();
    }
  };

  const stopScanning = () => {
    qrScanner.current.stop();
    setIsScanning(false);
  };

  const toggleTorch = () => {
    const newTorchState = !isTorchOn;

    qrScanner.current.videoContext.toggleTorch().then(() => setIsTorchOn(newTorchState));
  };

  const canUseTorch = cameraCapabilities?.torch;

  return { videoElement, toggleScanning, toggleTorch, cameraCapabilities, canUseTorch, isScanning, isTorchOn };
};

export { useQrScanner };
