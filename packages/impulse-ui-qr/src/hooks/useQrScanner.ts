import { useRef, useState } from 'react';
import { CameraCapabilities, QRScannerRestProps } from '@impulse-ui/types';
import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';

import { hints } from '../config';

const useQrScanner = (options: QRScannerRestProps) => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const cameraControls = useRef<IScannerControls>();
  const qrScanner = useRef(
    new BrowserQRCodeReader(hints, { delayBetweenScanAttempts: 50, delayBetweenScanSuccess: 50 }),
  );

  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);
  const [cameraCapabilities, setCameraCapabilities] = useState<CameraCapabilities>();

  const canUseTorch = cameraCapabilities?.torch;

  const toggleScanning = async () => {
    if (!isScanning && videoElement.current) {
      qrScanner.current
        .decodeFromConstraints(
          { video: { facingMode: 'environment' } },
          videoElement.current,
          (result, error, controls) => {
            if (result) options?.onDecode?.(result, controls);

            if (error) options?.onError?.(error, controls);
          },
        )
        .then(setupCameraControls);
    } else {
      stopScanning();
    }
  };

  const setupCameraControls = (controls: IScannerControls) => {
    setIsScanning(true);
    cameraControls.current = controls;
    const capabilities = controls.streamVideoCapabilitiesGet?.((track) => {
      track.getCapabilities();

      return [track];
    });

    setCameraCapabilities(capabilities);
  };

  const stopScanning = () => {
    if (cameraControls.current) {
      cameraControls.current.stop();
      setIsScanning(false);
    }
  };

  const toggleTorch = () => {
    if (cameraControls.current) {
      const newTorchState = !isTorchOn;

      cameraControls.current.switchTorch?.(newTorchState).then(() => setIsTorchOn(newTorchState));
    }
  };

  return { videoElement, toggleScanning, toggleTorch, cameraCapabilities, canUseTorch, isScanning, isTorchOn };
};

export { useQrScanner };
