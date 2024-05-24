import { QRScannerRestProps } from '@impulse-ui/types';
import jsQR from 'jsqr-es6';

import { NotFoundException } from '../exceptions';
import { NavigatorSupportException } from '../exceptions';

import { CanvasContext } from './CanvasContext';
import { VideoContext } from './VideoContext';

export class Scanner {
  private _scanningLoopId?: NodeJS.Timeout;
  private _scanningInterval: number;
  private _videoContext: VideoContext = new VideoContext();
  private _canvasContext: CanvasContext = new CanvasContext();

  constructor(scanningInterval: number) {
    this._scanningInterval = scanningInterval;
  }

  async scan(
    videoElement: HTMLVideoElement,
    onSuccess: QRScannerRestProps['onSuccess'],
    onError?: QRScannerRestProps['onError'],
  ) {
    this.videoContext.attachVideoElement(videoElement);

    try {
      await this.videoContext.getVideoStream();
    } catch (e) {
      onError?.(new NavigatorSupportException());
    }

    this.scanningLoopId = setInterval(() => {
      console.log('scanning');
      const imageData = this.canvasContext.drawImageOnCanvas(this.videoContext.videoElement);
      const image = imageData.data;

      try {
        onSuccess(this.decode(image, imageData.width, imageData.height));
      } catch (e) {
        onError?.(e as NotFoundException);
      }
    }, this.scanningInterval);

    return this.videoContext.cameraCapabilities;
  }

  private decode(image: Uint8ClampedArray, width: number, height: number) {
    const code = jsQR(image, width, height);

    if (code) return code;

    throw new NotFoundException();
  }

  stop() {
    clearInterval(this.scanningLoopId);
    this.videoContext.cleanVideoContext();
    this.canvasContext.cleanCanvasContext();
  }

  get scanningLoopId(): NodeJS.Timeout | undefined {
    return this._scanningLoopId;
  }

  set scanningLoopId(value: NodeJS.Timeout) {
    this._scanningLoopId = value;
  }

  get scanningInterval(): number {
    return this._scanningInterval;
  }

  set scanningInterval(value: number) {
    this._scanningInterval = value;
  }

  get canvasContext(): CanvasContext {
    return this._canvasContext;
  }

  get videoContext(): VideoContext {
    return this._videoContext;
  }
}
