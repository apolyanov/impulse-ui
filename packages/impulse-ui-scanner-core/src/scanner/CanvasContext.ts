import { NoCanvasContextException } from '../exceptions';

export class CanvasContext {
  private _element = document.createElement('canvas');
  private _context = this.element.getContext('2d', { willReadFrequently: true });

  cleanCanvasContext() {
    const newCanvasElement = document.createElement('canvas');
    this.element = newCanvasElement;
    this.context = newCanvasElement.getContext('2d', { willReadFrequently: true });
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

    this.context.drawImage(videoElement, clipStartX, clipStartY, canvasSize, canvasSize, 0, 0, canvasSize, canvasSize);

    return this.context.getImageData(0, 0, this.element.width, this.element.height);
  }

  private updateCanvasSize(size: number) {
    this.element.width = size;
    this.element.height = size;
  }

  get element(): HTMLCanvasElement {
    return this._element;
  }

  set element(value: HTMLCanvasElement) {
    this._element = value;
  }

  get context(): CanvasRenderingContext2D {
    if (this._context) return this._context;

    throw new NoCanvasContextException();
  }

  set context(value: CanvasRenderingContext2D | null) {
    this._context = value;
  }
}
