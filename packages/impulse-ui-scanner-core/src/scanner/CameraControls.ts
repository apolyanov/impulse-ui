import { CameraCapabilities } from '../types';

import { NoCameraCapabilitiesAvailableException, NoMediaTrackException } from '../exceptions';

export class CameraControls {
  private _cameraCapabilities?: CameraCapabilities;

  get cameraCapabilities(): CameraCapabilities {
    if (this._cameraCapabilities) return this._cameraCapabilities;

    throw new NoCameraCapabilitiesAvailableException();
  }

  private set cameraCapabilities(track: MediaStreamTrack | undefined) {
    this._cameraCapabilities = track?.getCapabilities();
  }

  private _videoTrack?: MediaStreamTrack;

  get videoTrack(): MediaStreamTrack {
    if (this._videoTrack) return this._videoTrack;

    throw new NoMediaTrackException();
  }

  set videoTrack(value: MediaStreamTrack | undefined) {
    this._videoTrack = value;
    this.cameraCapabilities = value;
  }

  async turnTorchOn() {
    if (this.canUseTorch()) {
      await this.videoTrack.applyConstraints({ advanced: [{ torch: true } as MediaTrackConstraintSet] });
    }
  }

  async turnTorchOff() {
    if (this.canUseTorch()) {
      await this.videoTrack.applyConstraints({ advanced: [{ torch: false } as MediaTrackConstraintSet] });
    }
  }

  canUseTorch() {
    return this.cameraCapabilities.torch;
  }
}
