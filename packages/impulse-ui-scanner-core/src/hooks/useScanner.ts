import { useCallback, useRef, useState } from 'react';
import { CameraCapabilities, UseScannerProps } from '@impulse-ui/types';

import { Scanner } from '../scanner';

const useScanner = <T>(options: UseScannerProps<T>) => {
  const { scanningInterval, scanningFn, onSuccess, onError } = options;
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const qrScanner = useRef(new Scanner(scanningInterval));

  const [cameraCapabilities, setCameraCapabilities] = useState<CameraCapabilities>();
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);

  const toggleScanning = async () => {
    if (!isScanning && videoElement.current) {
      qrScanner.current.scan(videoElement.current, scanningFn, onSuccess, onError).then((camera) => {
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

  const mountVideoElement = useCallback((element: HTMLVideoElement | null) => {
    if (!element) qrScanner.current.stop();

    videoElement.current = element;
  }, []);

  return {
    videoElement,
    toggleScanning,
    toggleTorch,
    cameraCapabilities,
    canUseTorch,
    isScanning,
    isTorchOn,
    mountVideoElement,
  };
};

export { useScanner };
