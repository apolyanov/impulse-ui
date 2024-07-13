import { QRScannerRestProps, ScanningFn } from '@impulse-ui/types';

import {
  NavigatorSupportException,
  NoOnSuccessCallbackException,
  NoScanningFunctionException,
  NotFoundException,
} from '../exceptions';

import { CanvasContext } from './CanvasContext';
import { VideoContext } from './VideoContext';

export class Scanner {
  private _isScanning: boolean = false;
  private _paused: boolean = false;
  private _scanningLoopId?: NodeJS.Timeout;
  private _scanningInterval: number;
  private _onSuccess?: QRScannerRestProps['onSuccess'];
  private _onError?: QRScannerRestProps['onError'];
  private _video: VideoContext = new VideoContext();
  private _canvas: CanvasContext = new CanvasContext();
  private _scanningFn?: ScanningFn;

  constructor(scanningInterval: number) {
    this._scanningInterval = scanningInterval;
  }

  async scan<T = unknown>(
    videoElement: HTMLVideoElement,
    scanningFn: ScanningFn<T>,
    onSuccess: QRScannerRestProps['onSuccess'],
    onError?: QRScannerRestProps['onError'],
  ) {
    this.onSuccess = onSuccess;
    this.onError = onError;
    this.scanningFn = scanningFn;
    this.video.attachVideoElement(videoElement);

    try {
      await this.video.getVideoStream();
    } catch (e) {
      onError?.(new NavigatorSupportException());
    }

    this.isScanning = true;
    this.startScanLoop();

    return this.video.cameraCapabilities;
  }

  private startScanLoop() {
    this.scanningLoopId = setInterval(() => {
      const image = this.canvas.drawImageOnCanvas(this.video.element);

      try {
        this.onSuccess(this.scanningFn({ image, canvas: this.canvas, video: this.video }));
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
      this.video.cleanVideoContext();
      this.canvas.cleanCanvasContext();
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

  get canvas(): CanvasContext {
    return this._canvas;
  }

  get video(): VideoContext {
    return this._video;
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

  get scanningFn(): ScanningFn {
    if (this._scanningFn) return this._scanningFn;

    throw new NoScanningFunctionException();
  }

  set scanningFn(value: ScanningFn) {
    this._scanningFn = value;
  }
}
