import { NoCurrentStreamException, NoVideoElementException } from '../exceptions';

import { CameraControls } from './CameraControls';

export class VideoContext extends CameraControls {
  private _element?: HTMLVideoElement;
  private _stream?: MediaStream;

  async getVideoStream() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 640 } },
    });

    await this.prepareVideoElement(stream);
    this.stream = stream;
    this.videoTrack = stream.getVideoTracks()[0];
  }

  attachVideoElement(videoElement: HTMLVideoElement) {
    this.element = videoElement;
  }

  cleanVideoContext() {
    this.releaseVideoTracks();
    this.detachVideoElement();
  }

  private async prepareVideoElement(stream: MediaStream | MediaSource | Blob) {
    this.element.srcObject = stream;
    this.element.autoplay = true;
    this.element.playsInline = true;
    await this.element.play();
  }

  private detachVideoElement() {
    this.element.srcObject = null;
    this.element = undefined;
  }

  private releaseVideoTracks() {
    this.stream.getTracks().forEach((track) => track.stop());
    this.stream = undefined;
    this.videoTrack = undefined;
  }

  get element(): HTMLVideoElement {
    if (this._element) return this._element;

    throw new NoVideoElementException();
  }

  private set element(value: HTMLVideoElement | undefined) {
    this._element = value;
  }

  get stream(): MediaStream {
    if (this._stream) return this._stream;

    throw new NoCurrentStreamException();
  }

  private set stream(value: MediaStream | undefined) {
    this._stream = value;
  }
}
