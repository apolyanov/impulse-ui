import { BarcodeFormat, BrowserCodeReader } from '@zxing/browser';

const hints = new Map([[2, [BarcodeFormat.QR_CODE]]]);

BrowserCodeReader.drawImageOnCanvas = function (
  canvasElementContext: CanvasRenderingContext2D,
  srcElement: HTMLVideoElement,
) {
  const cameraOrientation = srcElement.videoWidth > srcElement.videoHeight ? 'horizontal' : 'vertical';
  const startCoordinate = Math.abs(srcElement.videoHeight - srcElement.videoWidth) / 2;

  const clipStartX = cameraOrientation === 'horizontal' ? startCoordinate : 0;
  const clipStartY = cameraOrientation === 'vertical' ? startCoordinate : 0;
  const videoSize = cameraOrientation === 'horizontal' ? srcElement.videoHeight : srcElement.videoWidth;

  canvasElementContext.drawImage(srcElement, clipStartX, clipStartY, videoSize, videoSize, 0, 0, videoSize, videoSize);
};

export { hints };
