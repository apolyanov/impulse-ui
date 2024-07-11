import { NoCurrentStreamException, NoVideoElementException } from '../exceptions';

import { CameraControls } from './CameraControls';

export class VideoContext extends CameraControls {
  private _videoElement?: HTMLVideoElement;
  private _videoStream?: MediaStream;

  async getVideoStream() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 640 } },
    });

    await this.prepareVideoElement(stream);
    this.videoStream = stream;
    this.videoTrack = stream.getVideoTracks()[0];
  }

  attachVideoElement(videoElement: HTMLVideoElement) {
    this.videoElement = videoElement;
  }

  cleanVideoContext() {
    this.releaseVideoTracks();
    this.detachVideoElement();
  }

  private async prepareVideoElement(stream: MediaStream | MediaSource | Blob) {
    this.videoElement.srcObject = stream;
    this.videoElement.autoplay = true;
    this.videoElement.playsInline = true;
    await this.videoElement.play();
  }

  private detachVideoElement() {
    this.videoElement.srcObject = null;
    this.videoElement = undefined;
  }

  private releaseVideoTracks() {
    this.videoStream.getTracks().forEach((track) => track.stop());
    this.videoStream = undefined;
    this.videoTrack = undefined;
  }

  get videoElement(): HTMLVideoElement {
    if (this._videoElement) return this._videoElement;

    throw new NoVideoElementException();
  }

  private set videoElement(value: HTMLVideoElement | undefined) {
    this._videoElement = value;
  }

  get videoStream(): MediaStream {
    if (this._videoStream) return this._videoStream;

    throw new NoCurrentStreamException();
  }

  private set videoStream(value: MediaStream | undefined) {
    this._videoStream = value;
  }
}
