import { QRScannerRestProps } from '@impulse-ui/types';

import { NavigatorSupportException, NoOnSuccessCallbackException, NotFoundException } from '../exceptions';

import { CanvasContext } from './CanvasContext';
import { VideoContext } from './VideoContext';

export class Scanner {
  private _isScanning: boolean = false;
  private _paused: boolean = false;
  private _scanningLoopId?: NodeJS.Timeout;
  private _scanningInterval: number;
  private _onSuccess?: QRScannerRestProps['onSuccess'];
  private _onError?: QRScannerRestProps['onError'];
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
    this.onSuccess = onSuccess;
    this.onError = onError;
    this.videoContext.attachVideoElement(videoElement);

    try {
      await this.videoContext.getVideoStream();
    } catch (e) {
      onError?.(new NavigatorSupportException());
    }

    this.isScanning = true;
    this.startScanLoop();

    return this.videoContext.cameraCapabilities;
  }

  private startScanLoop() {
    this.scanningLoopId = setInterval(() => {
      const imageData = this.canvasContext.drawImageOnCanvas(this.videoContext.videoElement);
      const image = imageData.data;

      try {
        this.onSuccess(this.decode(image, imageData.width, imageData.height));
      } catch (e) {
        this.onError?.(e as NotFoundException);
      }
    }, this.scanningInterval);
  }

  stop() {
    if (this.isScanning) {
      this.paused = false;
      this.isScanning = false;
      clearInterval(this.scanningLoopId);
      this.videoContext.cleanVideoContext();
      this.canvasContext.cleanCanvasContext();
    }
  }

  pause() {
    this.paused = true;
    clearInterval(this.scanningLoopId);
  }

  resume() {
    this.paused = false;
    this.startScanLoop();
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

  private get isScanning(): boolean {
    return this._isScanning;
  }

  private set isScanning(value: boolean) {
    this._isScanning = value;
  }

  get onSuccess(): QRScannerRestProps['onSuccess'] {
    if (this._onSuccess) return this._onSuccess;

    throw new NoOnSuccessCallbackException();
  }

  set onSuccess(value: QRScannerRestProps['onSuccess']) {
    this._onSuccess = value;
  }

  get onError(): QRScannerRestProps['onError'] {
    return this._onError;
  }

  set onError(value: QRScannerRestProps['onError']) {
    this._onError = value;
  }

  get paused(): boolean {
    return this._paused;
  }

  set paused(value: boolean) {
    this._paused = value;
  }
}
