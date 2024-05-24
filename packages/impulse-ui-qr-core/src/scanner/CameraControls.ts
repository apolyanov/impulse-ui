import { CameraCapabilities } from '@impulse-ui/types';

import { NoCameraCapabilitiesAvailable, NoMediaTrack } from '../exceptions';

export class CameraControls {
  private _cameraCapabilities?: CameraCapabilities;
  private _videoTrack?: MediaStreamTrack;

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

  async toggleTorch() {
    if (this.canUseTorch()) {
      await this.videoTrack.applyConstraints({
        advanced: [{ torch: !this.getSettings().torch } as MediaTrackConstraintSet],
      });
    }
  }

  get videoTrack(): MediaStreamTrack {
    if (this._videoTrack) return this._videoTrack;

    throw new NoMediaTrack();
  }

  private getConstraints() {
    return this.videoTrack.getConstraints() as CameraCapabilities;
  }

  private getSettings() {
    return this.videoTrack.getSettings() as CameraCapabilities;
  }

  set videoTrack(value: MediaStreamTrack | undefined) {
    this._videoTrack = value;
    this.cameraCapabilities = value;
  }

  get cameraCapabilities(): CameraCapabilities {
    if (this._cameraCapabilities) return this._cameraCapabilities;

    throw new NoCameraCapabilitiesAvailable();
  }

  private set cameraCapabilities(track: MediaStreamTrack | undefined) {
    this._cameraCapabilities = track?.getCapabilities();
  }
}
