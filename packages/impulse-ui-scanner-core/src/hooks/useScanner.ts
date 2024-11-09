import { useCallback, useRef, useState } from 'react';
import { CameraCapabilities, UseScannerProps } from '../types';

import { Scanner } from '../scanner';

const useScanner = <T>(options: UseScannerProps<T>) => {
  const { scanningInterval, scanningFn, onSuccess, onError } = options;
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const qrScanner = useRef(new Scanner(scanningInterval));

  const [cameraCapabilities, setCameraCapabilities] = useState<CameraCapabilities>();
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);

  const toggleScanning = () => {
    if (canStartScanning()) {
      startScanning();
    } else {
      pauseScanning();
    }
  };

  const startScanning = () => {
    if (qrScanner.current.paused) {
      setIsScanning(true);
      return qrScanner.current.resume();
    }
    if (canStartScanning()) {
      qrScanner.current.scan(videoElement.current, scanningFn, onSuccess, onError).then((camera) => {
        setCameraCapabilities(camera);
        setIsScanning(true);
      });
    }
  };

  const pauseScanning = () => {
    qrScanner.current.pause();
    setIsScanning(false);
  };

  const stopScanning = () => {
    qrScanner.current.stop();
    setIsScanning(false);
  };

  const canStartScanning = () => !isScanning && videoElement.current;

  const toggleTorch = () => {
    if (isTorchOn) {
      qrScanner.current.video.turnTorchOff().then(() => setIsTorchOn(false));
    } else {
      qrScanner.current.video.turnTorchOn().then(() => setIsTorchOn(true));
    }
  };

  const canUseTorch = cameraCapabilities?.torch;

  const mountVideoElement = useCallback((element: HTMLVideoElement | null) => {
    if (!element) qrScanner.current.stop();

    videoElement.current = element;
  }, []);

  return {
    toggleScanning,
    toggleTorch,
    stopScanning,
    startScanning,
    canStartScanning,
    videoElement,
    cameraCapabilities,
    canUseTorch,
    isScanning,
    isTorchOn,
    mountVideoElement,
  };
};

export { useScanner };
