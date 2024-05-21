import { NoCurrentStreamException, NoVideoElement } from '../exceptions';

export class VideoContext {
  private _videoElement?: HTMLVideoElement;
  private _videoStream?: MediaStream;
  private _videoTracks: MediaStreamTrack[] = [];

  async getVideoStream() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 640 } },
    });

    await this.prepareVideoElement(stream);
    this.videoStream = stream;
    this.videoTracks = stream.getVideoTracks();
  }

  attachVideoElement(videoElement: HTMLVideoElement) {
    this.videoElement = videoElement;
  }

  cleanVideoContext() {
    this.detachVideoElement();
    this.releaseVideoTracks();
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
    this.videoTracks.forEach((track) => {
      track.stop();
      this.videoStream.removeTrack(track);
    });

    this.videoStream = undefined;
  }

  get videoElement(): HTMLVideoElement {
    if (this._videoElement) return this._videoElement;

    throw new NoVideoElement();
  }

  set videoElement(value: HTMLVideoElement | undefined) {
    this._videoElement = value;
  }

  get videoTracks(): MediaStreamTrack[] {
    return this._videoTracks;
  }

  set videoTracks(value: MediaStreamTrack[]) {
    this._videoTracks = value;
  }

  get videoStream(): MediaStream {
    if (this._videoStream) return this._videoStream;

    throw new NoCurrentStreamException();
  }

  set videoStream(value: MediaStream | undefined) {
    this._videoStream = value;
  }
}
