import { NoCanvasContext } from '../exceptions';

export class CanvasContext {
  private _canvasElement = document.createElement('canvas');
  private _canvasContext = this.canvasElement.getContext('2d', { willReadFrequently: true });

  cleanCanvasContext() {
    const newCanvasElement = document.createElement('canvas');
    this.canvasElement = newCanvasElement;
    this.canvasContext = newCanvasElement.getContext('2d', { willReadFrequently: true });
  }

  drawImageOnCanvas(videoElement: HTMLVideoElement) {
    return this.cropAndDraw(videoElement);
  }

  private cropAndDraw(videoElement: HTMLVideoElement) {
    const cameraOrientation = videoElement.videoWidth > videoElement.videoHeight ? 'horizontal' : 'vertical';
    const startCoordinate = Math.abs(videoElement.videoHeight - videoElement.videoWidth) / 2;

    const clipStartX = cameraOrientation === 'horizontal' ? startCoordinate : 0;
    const clipStartY = cameraOrientation === 'vertical' ? startCoordinate : 0;
    const canvasSize = cameraOrientation === 'horizontal' ? videoElement.videoHeight : videoElement.videoWidth;

    this.updateCanvasSize(canvasSize);

    this.canvasContext.drawImage(
      videoElement,
      clipStartX,
      clipStartY,
      canvasSize,
      canvasSize,
      0,
      0,
      canvasSize,
      canvasSize,
    );

    return this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  private updateCanvasSize(size: number) {
    this.canvasElement.width = size;
    this.canvasElement.height = size;
  }

  get canvasElement(): HTMLCanvasElement {
    return this._canvasElement;
  }

  set canvasElement(value: HTMLCanvasElement) {
    this._canvasElement = value;
  }

  get canvasContext(): CanvasRenderingContext2D {
    if (this._canvasContext) return this._canvasContext;

    throw new NoCanvasContext();
  }

  set canvasContext(value: CanvasRenderingContext2D | null) {
    this._canvasContext = value;
  }
}
